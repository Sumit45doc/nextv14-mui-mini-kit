"use client";
import HomeLayout from "@/components/shared/layout/home-layout";
import { Stack, styled } from "@mui/material";
import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <PageLayout>
      <HomeLayout />
      {children}
    </PageLayout>
  );
}

export default layout;

const PageLayout = styled(Stack)(({ theme }) => ({
  height: "100%",
  ...(theme.palette.mode === "light"
    ? {
        backgroundImage: `linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)`,
      }
    : {
        backgroundImage: `linear-gradient(-225deg, ${theme.palette.background.default} 0%, #444a4c 100%)`,
      }),
}));
