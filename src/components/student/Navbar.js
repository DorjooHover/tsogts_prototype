import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Search, Settings } from "@mui/icons-material";
function Title(props) {
  switch (parseInt(props.title)) {
    case 0:
      return <>Dashboard</>;
    case 1:
      return <>Course</>;
    case 2:
      return <>Schedule</>;
    case 3:
      return <>Profile</>;
    default:
      return <></>;
  }
}
export default function Navbar({ dashboard }) {
  return (
    <div className="flex justify-between w-full items-center px-8 bg-white">
      <h2 className="font-bold text-2xl text-gray-900">
        <Title title={dashboard} />
      </h2>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <Search />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search here..."
          inputProps={{ "aria-label": "search" }}
        />
      </Paper>
      <Box>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <img
            src="/img/students/badamaa.jpg"
            alt="student"
            className="h-12 rounded-md"
          />
        </IconButton>
      </Box>
    </div>
  );
}
