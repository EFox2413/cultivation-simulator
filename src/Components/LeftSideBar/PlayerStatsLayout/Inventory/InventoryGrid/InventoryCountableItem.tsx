import { Box, TooltipProps, Typography } from "@mui/material";
import CropSquareImage from "Components/shared/CropImage";
import HtmlTooltip from "Components/shared/HtmlTooltip";
import {
  InventoryCountableItem as Type,
  Material,
} from "GameConstants/Interfaces";
import EmptyCell from "./EmptyCell";
import findItemDescription from "GameConstants/utils/findItemDescription";
import { MoneyType } from "GameConstants/Money";

// Draw inventory money item
export default function InventoryCountableItem(props: Type) {
  const { name, amount, type } = props;
  // Find image
  const cellData: MoneyType | Material | undefined = findItemDescription(
    name,
    type
  );
  if (!cellData) return <EmptyCell />;
  return (
    <CountableCellTooltip name={name} description={cellData.description}>
      <Box
        width={64}
        height={64}
        border="1px solid gray"
        display="flex"
        flexDirection="column"
        sx={{ justifyContent: "space-around", alignItems: "center" }}
      >
        <Box>
          <CropSquareImage
            path={cellData.image.path}
            size={cellData.image.sizeX}
            position={{ x: cellData.image.x, y: cellData.image.y }}
          />
        </Box>
        <Box>
          <Typography variant="body2">{amount.toFixed(2)}</Typography>
        </Box>
      </Box>
    </CountableCellTooltip>
  );
}

type CountableTooltipProps = Omit<TooltipProps, "title"> & {
  name: string;
  description: string;
};

function CountableCellTooltip(props: CountableTooltipProps) {
  const { name, description } = props;
  return (
    <HtmlTooltip
      title={
        <>
          <Typography color="inherit">{name}</Typography>
          <Typography variant="body2">{description}</Typography>
        </>
      }
    >
      {props.children}
    </HtmlTooltip>
  );
}
