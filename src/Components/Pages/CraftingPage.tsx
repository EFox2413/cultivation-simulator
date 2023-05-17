import { Box, Typography } from "@mui/material";
import { usePlayerState } from "GameEngine/Player/PlayerContext";
import Recipies from "./CraftingPage/Recipies";

export default function CraftingPage() {
  const { state } = usePlayerState();

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
