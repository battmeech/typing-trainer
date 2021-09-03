import { Box, ChakraProvider, Grid, theme, VStack } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Game } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Game />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
