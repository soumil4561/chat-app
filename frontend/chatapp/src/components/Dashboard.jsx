import React from "react";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Nav_Buttons } from "../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

export default function Dashboard() {
  const theme = useTheme();
  const [selected, setSelected] = React.useState(0);
  return (
    <>
      <Box
        p={1}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems={"centre"}
          justifyContent="space-between"
          sx={{ heigth: "100%" }}
          spacing={3}
          
        >
        <Stack alignItems={"center"} spacing={4}>
        <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "64px",
              width: "64px",
              borderRadius: 1.5,
              
            }}
          > <img src="main.png" width={40}></img></Box>
          <Stack spacing={3} alignItems="center">
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    key={el.index}
                    sx={{ width: "max-content", color: "white" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  key={el.index}
                  sx={{ width: "max-content", color: "black" }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: 48 }} />
            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "white" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3);
                }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>            
          
          <Stack alignItems="center" justifyContent="end" sx={{height: 350}} spacing={2}>
            <Switch defaultChecked ></Switch>
            <Avatar src={faker.image.avatar()}></Avatar>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
