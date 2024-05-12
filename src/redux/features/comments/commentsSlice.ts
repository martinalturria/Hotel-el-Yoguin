/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    collection,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    onSnapshot,
    serverTimestamp,
} from "firebase/firestore";
import {
    Comment,
    CommentsState,
    NewCommentData,
} from "../../../Interfaces/interfaces";
import type { RootState } from "../../store";
import { db } from "../../../config/firebase-config";

const initialState: CommentsState = {
    comments: [],
};

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload;
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
        },
        removeComment: (state, action: PayloadAction<string>) => {
            state.comments = state.comments.filter(
                (comment) => comment.id !== action.payload
            );
        },
        updateComment: (state, action: PayloadAction<Comment>) => {
            const index = state.comments.findIndex(
                (comment) => comment.id === action.payload.id
            );
            if (index !== -1) {
                state.comments[index] = action.payload;
            }
        },
    },
});

// Async thunks for interacting with Firebase
export const fetchAndSetComments = () => (dispatch: any) => {
    const unsubscribe = onSnapshot(
        collection(db, "comments"),
        (snapshot) => {
            const comments = snapshot.docs.map((doc) => {
                const data = doc.data();
                const dateISO = data.date
                    ? data.date.toDate().toISOString()
                    : null;
                return {
                    id: doc.id,
                    name: data.name,
                    rating: data.rating,
                    comment: data.comment,
                    date: dateISO,
                };
            });
            dispatch(setComments(comments));
        },
        (error) => {
            console.error("Error al acceder a los comentarios:", error);
        }
    );

    return () => unsubscribe();
};

export const firebaseAddComment = createAsyncThunk(
    "comments/firebaseAddComment",
    async (newCommentData: NewCommentData, { rejectWithValue }) => {
        try {
            const docRef = await addDoc(collection(db, "comments"), {
                ...newCommentData,
                date: serverTimestamp(),
            });
            return { id: docRef.id, ...newCommentData };
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const firebaseRemoveComment = (id: string) => async () => {
    const commentRef = doc(db, "comments", id);
    await deleteDoc(commentRef);
};

export const firebaseUpdateComment = (updatedComment: Comment) => async () => {
    const commentData = { ...updatedComment };
    const commentRef = doc(db, "comments", updatedComment.id);
    await updateDoc(commentRef, commentData);
};

// Actions
export const { setComments, addComment, removeComment, updateComment } =
    commentsSlice.actions;

// Selectors
export const selectComments = (state: RootState) => state.comments.comments;

// Reducer
export default commentsSlice.reducer;
