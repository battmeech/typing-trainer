import {
  Box,
  Center,
  ChakraProvider,
  Heading,
  HStack,
  theme,
} from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game } from "./components";
import { Leaderboard } from "./components/Leaderboard";
import { Navigation } from "./Navigation";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Box minH="100vh" p={3}>
        <BrowserRouter>
          <HStack maxW="1600px" mx="auto" justify="space-between">
            <Heading size="lg">Typing Trainer </Heading>
            <Navigation />
          </HStack>

          <Center h="90vh" p="2" maxW="1600px" mx="auto">
            <Routes>
              <Route path="/" element={<Game />}></Route>
              <Route path="/leaderboard" element={<Leaderboard />}></Route>
            </Routes>
          </Center>
        </BrowserRouter>
      </Box>
    </Box>
  </ChakraProvider>
);
