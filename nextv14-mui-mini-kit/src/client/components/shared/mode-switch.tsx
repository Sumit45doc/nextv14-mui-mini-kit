"use client";

import { HalfMoon, SunLight } from "iconoir-react";
import { IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux-state/hooks";
import { onToggleMode } from "@/redux-state/slices/appSetting";

export default function ModeSwitch() {
  const { themeMode } = useAppSelector((state) => state.appSetting);
  const dispatch = useAppDispatch();

  const handleToggleMode = () => {
    dispatch(onToggleMode());
  };

  return (
    <IconButton onClick={handleToggleMode} sx={{ width: 40, height: 40 }}>
      {themeMode === "dark" ? (
        <SunLight strokeWidth="2" width={24} height={24} />
      ) : (
        <HalfMoon strokeWidth="2" width={24} height={24} />
      )}
    </IconButton>
  );
}
