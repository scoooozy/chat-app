import { Box, IconButton, Stack, useTheme } from "@mui/material";
import {Nav_Buttons} from '../../data/index'
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
const DashboardLayout = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack direction="column" alignItems={'center'} sx={{
          width:"100%"
        }}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: "12px ",
            }}
          >
            <img src={Logo} alt="logo" />
          </Box>
          {Nav_Buttons.map((el) => {
            <IconButton key={el.index}>
              {el.icon}
              
          </IconButton>})}
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
