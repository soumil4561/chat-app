import React from "react";
import Chat from "./Chat";
import { Box, Stack } from "@mui/system";
import { styled, useTheme} from "@mui/material/styles";
import { Avatar, Badge, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { CaretDown, Divide, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from "phosphor-react";

export default function Conversation() {
    const theme = useTheme();
    const StyledInput = styled(TextField)(({theme}) => ({
        "& .MuiInputBase-input": {
            paddingTop: "12px",
            paddingBottom: "12px"
        }
    }));

    const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor: "#ffffff",
        }}
      >
        <Stack sx={{ height: "100%", maxHeight: "100vh", width: "auto" }}>
          <Box
            p={1.2}
            sx={{
              width: "100%",
              backgroundColor: "#f8faff",
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ height: "100%", width: "100%" }}
            >
              <Stack direction={"row"} spacing={1.7}>
                <Box>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar src={faker.image.avatar()}></Avatar>
                  </StyledBadge>
                </Box>
                <Stack spacing={0.3}>
                  <Typography variant="subtitle2" fontWeight={"bold"}>
                    {faker.name.fullName()}
                  </Typography>
                  <Typography variant="caption">Online</Typography>
                </Stack>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <IconButton>
                    <VideoCamera />
                </IconButton>
                <IconButton>
                    <Phone />
                </IconButton>
                <IconButton>
                    <MagnifyingGlass />
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton>
                    <CaretDown />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ width: "100%", flexGrow: 1 }}></Box>
          <Box
          p={2}
            sx={{
              width: "100%",
              backgroundColor: "#f8faff",
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            }}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <StyledInput fullWidth placeholder="Write a message..." variant="filled" InputProps={{
                    disableUnderline: true,
                    startAdornment: <InputAdornment>
                        <IconButton>
                            <LinkSimple />
                        </IconButton>
                    </InputAdornment> ,
                    endAdornment: <InputAdornment>
                        <IconButton>
                            <Smiley />
                        </IconButton>
                    </InputAdornment>
                }

                }/>
                <Box sx={{height: 48, width: 48, borderRadius: 1.5, backgroundColor:theme.palette.primary.main }}>
                    <Stack sx={{height: "100%", width: "100%"}} alignItems={"center"} justifyContent={"center"} >
                    <IconButton>
                        <PaperPlaneTilt color="white"/>
                    </IconButton>
                    </Stack>
                </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
