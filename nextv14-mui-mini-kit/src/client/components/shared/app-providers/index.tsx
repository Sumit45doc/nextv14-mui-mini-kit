import ReduxProvider from "@/redux-state/provider";
import ThemeProvider from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React, { ReactNode } from "react";
import NotistackProvider from "./NotistackProvider";

type Props = {
  children: ReactNode;
};

function AppProviders({ children }: Props) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ReduxProvider>
        <ThemeProvider>
          <NotistackProvider>{children}</NotistackProvider>
        </ThemeProvider>
      </ReduxProvider>
    </AppRouterCacheProvider>
  );
}

export default AppProviders;
