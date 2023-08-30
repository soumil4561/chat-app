import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  IconButton,
  InputBase,
  Stack,
  Typography,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  Divide,
  MagnifyingGlass,
  PushPin,
} from "phosphor-react";
import { styled, alpha } from "@mui/material/styles";
import { ChatList } from "../data";

export default function Chat() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    borderRadius: "20px",
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
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

  const ChatElement = ({ id, name, image, msg, time, unread, online }) => {
    return (
      <Box
        sx={{
          width: "100%",
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
        p={1}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={image}></Avatar>
              </StyledBadge>
            ) : (
              <Avatar></Avatar>
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              <Typography variant="caption">{msg}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems="center">
            <Typography sx={{ fontWeight: 600 }} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}></Badge>
          </Stack>
        </Stack>
      </Box>
    );
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: 320,
          height: "100vh",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
      >
        <Stack p={3} spacing={2} height={"100vh"}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Chats
            </Typography>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search" />
            </Search>
          </Stack>
          <Stack spacing={1} flexGrow={1} overflow="auto" sx={{ width: "100%" }}>
            <Stack direction="row" alignItems={"centre"} spacing={1.5}> 
              <ArchiveBox size={24} />
              <Button>
                <Typography variant="subtitle2">Archived</Typography>
              </Button>
            </Stack>
            <Divider />
            <Stack direction="column" >
              <Stack spacing={2} direction="column">
                <Stack direction="row" spacing={1.3} alignItems="center">
                  <PushPin></PushPin>{" "}
                  <Typography variant="subtitle2" sx={{ color: "676767" }}>
                    Pinned
                  </Typography>
                </Stack>
                {ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement key={el.id} {...el} />;
                })}
              </Stack>
            </Stack>
            <Stack spacing={2} direction="column">
              <Typography variant="subtitle2" sx={{ color: "676767" }}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement key={el.id} {...el} />;
              })}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
