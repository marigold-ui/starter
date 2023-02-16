import React from "react";
import { Box, Button, MarigoldProvider } from "@marigold/components";
import theme from "@marigold/theme-b2b";

export const App = () => (
  <MarigoldProvider theme={theme}>
    <Box css={{ p: "small" }}>
      <Button variant="primary" onClick={() => alert("Hey there!")}>
        Hello World
      </Button>
    </Box>
  </MarigoldProvider>
);
