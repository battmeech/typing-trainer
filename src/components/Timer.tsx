import { Text } from "@chakra-ui/react";
import React from "react";

export const Timer = ({ timeLeft }: { timeLeft: number }) => (
  <Text>Time left: {timeLeft}</Text>
);
