"use client";
import { useAppSelector } from "@/redux/hooks";
import { Stack, styled, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const { themeMode } = useAppSelector((state) => state.appSetting);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <main style={{ height: "100%" }}>
      <ImageSection>
        <Image
          src={`/images/next-${themeMode}.svg`}
          alt="Next js"
          width={isMobile ? 200 : 300}
          height={isMobile ? 100 : 300}
        />
        <Add>+</Add>
        <Image
          src={`/images/redux-${themeMode}.svg`}
          alt="redux"
          width={isMobile ? 100 : 150}
          height={isMobile ? 100 : 150}
        />
        <Add>+</Add>
        <Image
          src={`/images/mui-${themeMode}.png`}
          alt="mui"
          width={isMobile ? 100 : 150}
          height={isMobile ? 100 : 150}
        />
      </ImageSection>
    </main>
  );
}

const ImageSection = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  columnGap: "2rem",
  rowGap: "2rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const Add = styled("span")(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: theme.typography.fontWeightLight,
}));
