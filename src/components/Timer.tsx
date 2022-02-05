import { Text } from "@chakra-ui/react";
import React from "react";

export const Timer = ({
  timeLeft,
  showDecimal,
}: {
  timeLeft: number;
  showDecimal?: boolean;
}) => <Text>Time left: {showDecimal ? timeLeft : Math.ceil(timeLeft)}</Text>;
