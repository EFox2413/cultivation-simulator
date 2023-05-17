import { Box } from "@mui/material";
import React, { ComponentType } from "react";
import { usePlayerState } from "GameEngine/Player/PlayerContext";
import { ActivityCardProps } from "Components/shared/ActivityCards/types";
import { useGameState } from "GameEngine/GameContext/GameContext";

type Props = { source: string; Card: ComponentType<ActivityCardProps> };

export default function ActionsPage(props: Props) {
  const { source, Card } = props;
  const gameData = useGameState();
  const { state } = usePlayerState();

  // Determine active action if any
  const { action, activity } = state;
  let activityName = "";
  if (action === "activity" && activity) {
    activityName = activity.name;
  }

  return (
    <Box>
      <Box display="flex" flexWrap={"wrap"}>
        {gameData[source].map((activity) => {
          return (
            // some conflict in type resolution files. Just ignore the linter warning
            // @ts-ignore
            <Card
              activity={activity}
              isActive={activityName === activity.name}
              showTimesCompleted
              source={source}
              key={activity.name}
            />
          );
        })}
      </Box>
    </Box>
  );
}
