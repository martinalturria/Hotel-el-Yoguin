import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ImagesState, Image } from "../../../Interfaces/interfaces";

const initialState: ImagesState = {
    images: [],
};

const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
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

// Actions
export const { addImage, removeImage, updateImage } = imagesSlice.actions;

// Selectors
export const selectImages = (state: RootState) => state.images.images;

// Reducer
export default imagesSlice.reducer;
