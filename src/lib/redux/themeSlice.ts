import { createSlice } from '@reduxjs/toolkit';
import { ITheme } from '@/types/types';

const initialState: { theme: ITheme } = {
  theme: window.matchMedia('(prefers-color-scheme:dark)').matches
    ? 'dark'
    : 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', state.theme === 'dark');
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
