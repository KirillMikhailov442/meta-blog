import { LocalStorageService } from '@/services';
import { createSlice } from '@reduxjs/toolkit';

interface PayloadType {
  theme: 'dark' | 'light';
}
const initialState: PayloadType = { theme: 'light' };

const localStorageService = LocalStorageService;

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state: PayloadType) => {
      if (state.theme == 'light') {
        state.theme = 'dark';
        localStorageService.change('theme', 'dark');
      } else {
        state.theme = 'light';
        localStorageService.change('theme', 'light');
      }
    },
    changeThemeInAttr: (state: PayloadType) => {
      if (state.theme == 'dark') {
        document.querySelector('html')?.setAttribute('theme', 'dark');
      } else {
        document.querySelector('html')?.setAttribute('theme', 'light');
      }
    },
  },
});

export default ThemeSlice.reducer;

export const { toggleTheme, changeThemeInAttr } = ThemeSlice.actions;
