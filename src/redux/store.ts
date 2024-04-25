import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./features/admin/adminSlice";
import commentsReducer from "./features/comments/commentsSlice";
import imagesReducer from "./features/images/imagesSlice";

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        comments: commentsReducer,
        images: imagesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
