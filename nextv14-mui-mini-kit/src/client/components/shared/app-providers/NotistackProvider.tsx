"use client";
import { SnackbarProvider } from "notistack";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function NotistackProvider({ children }: Props) {
  return (
    <SnackbarProvider
      autoHideDuration={2500}
      maxSnack={3}
      dense
      preventDuplicate
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {children}
    </SnackbarProvider>
  );
}

export default NotistackProvider;
