"use client";
import { useAppSelector } from "@/redux-state/hooks";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material";
import React, { ReactNode, useMemo } from "react";
import MuiGlobalStyles from "./MuiGlobalStyles";
import palette from "./palette";
import typography from "./typography";
import shadows from "./shadows";

type Props = {
  children: ReactNode;
};

function ThemeProvider({ children }: Props) {
  const { themeMode } = useAppSelector((state) => state.appSetting);
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
      shadows: shadows(themeMode),
    }),
    [themeMode]
  );

  const theme = createTheme(themeOptions);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MuiGlobalStyles />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
