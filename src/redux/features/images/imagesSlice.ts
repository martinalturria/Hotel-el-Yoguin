/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    onSnapshot,
} from "firebase/firestore";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { Image, ImagesState } from "../../../Interfaces/interfaces";
import type { AppDispatch, RootState } from "../../store";
import { db, storage } from "../../../config/firebase-config";

const initialState: ImagesState = {
    images: [],
};

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        setImages: (state, action: PayloadAction<Image[]>) => {
            state.images = action.payload;
        },
        addImage: (state, action: PayloadAction<Image>) => {
            state.images.push(action.payload);
        },
        removeImage: (state, action: PayloadAction<string>) => {
            state.images = state.images.filter(
                (image) => image.id !== action.payload
            );
        },
        updateImage: (state, action: PayloadAction<Image>) => {
            const index = state.images.findIndex(
                (image) => image.id === action.payload.id
            );
            if (index !== -1) {
                state.images[index] = action.payload;
            }
        },
    },
});

export const fetchAndSetImages = () => (dispatch: AppDispatch) => {
    const unsubscribe = onSnapshot(
        collection(db, "images"),
        (snapshot) => {
            const images = snapshot.docs.map((doc) => ({
                id: doc.id,
                url: doc.data().url,
                name: doc.data().name,
                title: doc.data().title || doc.data().name, // Usar 'name' como 'title' si 'title' no está disponible
            }));
            dispatch(setImages(images));
        },
        (error) => {
            console.error("Error al acceder a las imágenes:", error);
        }
    );

    return () => unsubscribe();
};

export const firebaseAddImage = createAsyncThunk(
    "images/firebaseAddImage",
    async (file: File, { rejectWithValue }) => {
        try {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);

            const docRef = await addDoc(collection(db, "images"), {
                url,
                name: file.name,
                title: file.name, // Usar 'file.name' como título
            });

            return { id: docRef.id, url, name: file.name, title: file.name };
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            return rejectWithValue(error);
        }
    }
);

export const firebaseRemoveImage = createAsyncThunk(
    "images/firebaseRemoveImage",
    async (id: string, { dispatch, rejectWithValue }) => {
        try {
            const imageRef = doc(db, "images", id);
            const imageDoc = await getDoc(imageRef);
            const imageUrl = imageDoc.data()?.url;
            const storageRef = ref(storage, imageUrl);

            await deleteObject(storageRef);
            await deleteDoc(imageRef);

            dispatch(removeImage(id));
        } catch (error) {
            console.error("Error al eliminar la imagen:", error);
            return rejectWithValue(error);
        }
    }
);

export const firebaseUpdateImage = createAsyncThunk(
    "images/firebaseUpdateImage",
    async (
        { id, file, title }: { id: string; file: File; title: string },
        { dispatch, rejectWithValue }
    ) => {
        try {
            const storageRef = ref(storage, `images/${file.name}`);
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);

            const imageRef = doc(db, "images", id);
            await updateDoc(imageRef, { url, name: title, title });

            dispatch(updateImage({ id, url, name: title, title }));

            return { id, url, name: title, title };
        } catch (error) {
            console.error("Error al actualizar la imagen:", error);
            return rejectWithValue(error);
        }
    }
);

// Actions
export const { setImages, addImage, removeImage, updateImage } =
    imagesSlice.actions;

// Selectors
export const selectImages = (state: RootState) => state.images.images;

// Reducer
export default imagesSlice.reducer;
