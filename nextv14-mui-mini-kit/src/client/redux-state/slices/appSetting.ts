import { createSlice } from "@reduxjs/toolkit";

type ThemeModeValue = 'light' | 'dark';
type ThemeStretchValue = boolean;

export type SettingsValueProps = {
    themeMode: ThemeModeValue;
    themeStretch: ThemeStretchValue;
};

const initialState: SettingsValueProps = {
    themeMode: 'dark',
    themeStretch: false
}

const settingSlice = createSlice({
    name: "app-settings",
    initialState,
    reducers: {
        setThemeMode(state, { payload }: { payload: ThemeModeValue }) {
            state.themeMode = payload
        },
        onToggleMode(state) {
            const value = state.themeMode === 'dark' ? 'light' : 'dark';
            state.themeMode = value
        },
        resetMode(state) {
            state.themeMode = 'dark';
        }
    }
})

export const { onToggleMode, setThemeMode, resetMode } = settingSlice.actions;

export default settingSlice.reducer;