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
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  Divide,
  MagnifyingGlass,
} from "phosphor-react";
import { styled, alpha } from "@mui/material/styles";

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

  const ChatElement = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "50px",
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
        p={1}
      >
        <Avatar ></Avatar>
      </Box>
    );
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: 320,
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3} spacing={2}>
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
          <Stack spacing={1}>
            <Stack direction="row" alignItems={"centre"} spacing={1.5}>
              <ArchiveBox size={24} />
              <Button>
                <Typography variant="subtitle2">Archived</Typography>
              </Button>
            </Stack>
            <Divider />
            <Stack direction="column">
              <ChatElement />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
