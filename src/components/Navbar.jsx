import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import * as React from "react";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Firebase Auth
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
