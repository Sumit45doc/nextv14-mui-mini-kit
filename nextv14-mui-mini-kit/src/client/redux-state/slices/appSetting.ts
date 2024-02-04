import { getCookie, removeCookie, setCookie } from "@/utils/cookieManager";
import { createSlice } from "@reduxjs/toolkit";

type ThemeModeValue = 'light' | 'dark';
type ThemeStretchValue = boolean;

export type SettingsValueProps = {
    themeMode: ThemeModeValue;
    themeStretch: ThemeStretchValue;
};

type SettingKey = keyof SettingsValueProps

const themeMode = getCookie('themeMode') as ThemeModeValue

const initialState: SettingsValueProps = {
    themeMode: themeMode || 'dark',
    themeStretch: false
}


const settingSlice = createSlice({
    name: "app-settings",
    initialState,
    reducers: {
        setThemeMode(state, { payload }: { payload: ThemeModeValue }) {
            state.themeMode = payload
            setCookie('themeMode' as SettingKey, payload)
        },
        onToggleMode(state) {
            const value = state.themeMode === 'dark' ? 'light' : 'dark';
            state.themeMode = value
            setCookie('themeMode' as SettingKey, value as ThemeModeValue)
        },
        resetMode(state) {
            state.themeMode = 'dark';
            removeCookie('themeMode' as SettingKey)
        }
    }
})

export const { onToggleMode, setThemeMode, resetMode } = settingSlice.actions;

export default settingSlice.reducer;