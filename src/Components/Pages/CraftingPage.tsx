import { Box, Typography } from "@mui/material";
import GameContext from "GameEngine/GameContext/GameContext";
import PlayerContext from "GameEngine/Player/PlayerContext";
import React from "react";
import Recipies from "./CraftingPage/Recipies";

export default function CraftingPage() {
  const { crafting } = React.useContext(GameContext);
  const { state } = React.useContext(PlayerContext);

  // Determine active training if any
  const { action, activity } = state;
  let activityName = "";
  if (action === "activity" && activity) {
    activityName = activity.name;
  }

  return (
    <Box>
      <Typography variant="h5">Craft</Typography>
      <Recipies />
    </Box>
  );
}