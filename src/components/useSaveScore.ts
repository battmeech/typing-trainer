import { useState } from "react";
import { useGame } from "../ducks";
import { supabase } from "../supabase";

export const useSaveScore = () => {
  const [name, setName] = useState("");
  const [ctaEnabled, setCtaEnabled] = useState(true);
  const { wordCount, noMercy, variation } = useGame();

  const saveScore = async () => {
    setCtaEnabled(false);
    await supabase
      .from("leaderboard")
      .insert({ name, mode: variation, no_mercy: noMercy, score: wordCount });
  };

  return { setName, name, saveScore, ctaEnabled };
};
