import { usePlayerState, useSetPlayerState } from "../Player/PlayerContext";
import React from "react";
import { GameTimer } from "GameEngine/GameRuntime";

// Placeholder. #todo: replace it with some better logic.
export default function useDefaultRegenManager(timer: GameTimer) {
  const { stats, state } = usePlayerState();
  const setContext = useSetPlayerState();
  const { currentTime, previousTime } = timer;
  React.useEffect(() => {
    // Regen health if health is not full
    const elapsedTime = currentTime - previousTime;
    if (
      stats.currentHealth <= stats.health &&
      ["idle", "training", "activity", "cultivating"].includes(state.action)
    )
      stats.currentHealth = Math.min(
        stats.currentHealth + (stats.healthRegen * elapsedTime) / 1000,
        stats.health
      );
    setContext((data) => ({ ...data, ...{ stats } }));
  }, [currentTime]);
}
