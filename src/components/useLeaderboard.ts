import { useEffect, useState } from "react";
import { Variation } from "../ducks/game";
import { supabase } from "../supabase";

type LeaderboardResult = {
  name: string;
  score: number;
  id: string;
};

export const useLeaderboard = () => {
  const [mode, setMode] = useState(Variation.SINGLE_WORD);
  const [noMercy, setNoMercy] = useState(false);
  const [data, setData] = useState<LeaderboardResult[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getScores = async () => {
      const { data } = await supabase
        .from("leaderboard")
        .select("name, score, id")
        .eq("no_mercy", noMercy)
        .eq("mode", mode)
        .order("score", { ascending: false })
        .limit(10);

      setData(data);
      setLoading(false);
    };

    getScores();
  }, [mode, noMercy]);

  const toggleNoMercy = () => {
    setNoMercy(!noMercy);
  };

  return { mode, setMode, noMercy, toggleNoMercy, data, loading };
};
