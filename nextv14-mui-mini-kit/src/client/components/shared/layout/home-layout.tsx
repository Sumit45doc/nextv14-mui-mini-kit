"use client";
import Stack from "@mui/material/Stack";
import React from "react";
import ModeSwitch from "../mode-switch";
import { styled } from "@mui/material";

const Header = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-end",
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  marginBottom: "0.05rem",
}));

function HomeLayout() {
  return (
    <Header>
      <ModeSwitch />
    </Header>
  );
}

export default HomeLayout;
