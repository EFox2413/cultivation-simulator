import { levelExp, totalExp } from "GameConstants/CultivationManuals";
import { playerStats } from "../Player/playerStats";
import React from "react";
import { usePlayerState, useSetPlayerState } from "../Player/PlayerContext";
import { GameTimer } from "GameEngine/GameRuntime";
import { playerSkills } from "GameEngine/Player/playerSkills";

// Updates cultivation manuals learning progress
export default function useCultivationManager(timer: GameTimer) {
  const player = usePlayerState();
  let { stats, state, skills } = player;
  const setContext = useSetPlayerState();
  const { currentTime, previousTime } = timer;
  React.useEffect(() => {
    if (state.action !== "cultivating" || !state.manual) return;
    // Update age
    const elapsedTime = currentTime - previousTime;
    // calculate exp gain
    const { learningProgress, manual } = state.manual;
    const { level, exp } = learningProgress;
    const expGain = (stats.insight * elapsedTime) / 1000;
    const maxExp = totalExp(manual.maxLevel);
    const newExp = Math.min(exp + expGain, maxExp);
    const overflowExp = newExp - totalExp(level);
    const newLevel =
      overflowExp >=
      levelExp(learningProgress.level + 1, manual.realm, manual.rarity)
        ? level + 1
        : level;
    // update manual progress
    state.manual.learningProgress.exp = newExp;
    // update player stats on reaching new level
    if (newLevel !== level) {
      state.manual.learningProgress.level = newLevel;
      if (manual.stats) stats = playerStats(player);
      if (manual.skills) skills = playerSkills(player);
    }
    setContext((data) => ({ ...data, ...{ state, stats, skills } }));
  }, [currentTime]);
}
