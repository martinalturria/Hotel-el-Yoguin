import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentsState } from '../../../Interfaces/interfaces';
import type { RootState } from '../../store';

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
    updateComment: (state, action: PayloadAction<Comment>) => {
      const index = state.comments.findIndex(comment => comment.id === action.payload.id);
      if (index !== -1) {
        state.comments[index] = action.payload;
      }
    },
  },
});

// Actions
export const { addComment, removeComment, updateComment } = commentsSlice.actions;

// Selectors
export const selectComments = (state: RootState) => state.comments.comments;

// Reducer
export default commentsSlice.reducer;
