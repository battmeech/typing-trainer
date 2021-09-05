import {
  Box,
  Center,
  ChakraProvider,
  HStack,
  theme,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Game } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Box minH="100vh" p={3}>
        <HStack maxW="1600px" mx="auto" justify="space-between">
          <Heading>Typing Trainer </Heading>
          <ColorModeSwitcher />
        </HStack>

        <Center h="90vh">
          <Game />
        </Center>
      </Box>
    </Box>
  </ChakraProvider>
);
