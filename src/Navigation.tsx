import { HStack, IconButton, Link } from "@chakra-ui/react";
import React from "react";
import { MdLeaderboard, MdHome } from "react-icons/md";
import { Link as ReactRouterLink } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const Navigation = () => {
  return (
    <HStack>
      <Link as={ReactRouterLink} to="/">
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginLeft="2"
          icon={<MdHome />}
          aria-label="Go to leader game screen"
        />
      </Link>

      <Link as={ReactRouterLink} to="/leaderboard">
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginLeft="2"
          icon={<MdLeaderboard />}
          aria-label="Go to leader board page"
        />
      </Link>

      <ColorModeSwitcher />
    </HStack>
  );
};
