import { Box } from "@mui/material";
import Villages from "GameConstants/Villages";
import ActivityButton from "./ActivityPane/ActivityButton";

export default function ActivityPane() {
  const Activities = Villages[0].activities;

  return (
    <Box>
      <Box display="flex">
        {Activities &&
          Activities.map((activity) => (
            <ActivityButton activity={activity} key={activity.name} />
          ))}
      </Box>
    </Box>
  );
}