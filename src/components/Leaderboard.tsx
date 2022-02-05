import {
  Button,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaSkullCrossbones } from "react-icons/fa";
import { GiAngelOutfit } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { gameActions, State, Variation } from "../ducks/game";
import { useLeaderboard } from "./useLeaderboard";

const emojiMap: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

export const Leaderboard = () => {
  const { data, setMode, noMercy, toggleNoMercy, loading, mode } =
    useLeaderboard();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameActions.restart());
    dispatch(gameActions.setState(State.NOT_STARTED));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loading) {
    return (
      <VStack w="100%" spacing={5}>
        {!data || data.length === 0 ? (
          <Text>No leaderboard yet, claim it yourself!</Text>
        ) : (
          <Table>
            <Thead>
              <Tr>
                <Th>Position</Th>
                <Th>Name</Th>
                <Th>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map(({ id, name, score }, index) => (
                <Tr key={id}>
                  <Td>
                    {emojiMap[index + 1]} {index + 1}{" "}
                  </Td>

                  <Td>{name}</Td>

                  <Td>{score}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
        <HStack w="100%">
          <Button
            w="33%"
            colorScheme="yellow"
            onClick={() => setMode(Variation.SINGLE_WORD)}
            disabled={mode === Variation.SINGLE_WORD}
          >
            Single word
          </Button>
          <Button
            w="33%"
            colorScheme="yellow"
            onClick={() => setMode(Variation.PARAGRAPH)}
            disabled={mode === Variation.PARAGRAPH}
          >
            Paragraph
          </Button>
          <Button
            w="33%"
            colorScheme="yellow"
            onClick={() => setMode(Variation.TIME_BOMB)}
            disabled={mode === Variation.TIME_BOMB}
          >
            Time bomb
          </Button>
        </HStack>

        <Button
          w="50%"
          rightIcon={noMercy ? <FaSkullCrossbones /> : <GiAngelOutfit />}
          colorScheme={noMercy ? "red" : "green"}
          onClick={toggleNoMercy}
        >
          {noMercy ? "No mercy scores" : "Normal scores"}
        </Button>
      </VStack>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};
