import Trainings from "GameConstants/Trainings";
import Mining from "GameConstants/Mining";
import Crafting from "GameConstants/Craft";
import { Activity } from "./Activities";
import { CultivationRealm, CultivationRealms } from "./CultivationRealms";
import Gathering from "./Gathering";

// Declarations for the game mechanics
// Contains game data. Is stored to localStorage every autosave interval.
export type GameContent = {
  trainings: Activity[]; // List of available activities for training tab
  mining: Activity[]; // List of available activities for mining tab
  crafting: Activity[]; // List of available activities for crafting tab
  gathering: Activity[]; // List of activities for gathering tab
  cultivationRealms: CultivationRealm[]; // Player cultivation realms with all tribulations passed and stat modifiers
};

export const gameContent: GameContent = {
  trainings: Trainings,
  mining: Mining,
  crafting: Crafting,
  gathering: Gathering,
  cultivationRealms: CultivationRealms,
};

export const NavigationBarPages = [
  "Training",
  "Manuals",
  "Breakthrough",
  "Mining",
  "Crafting",
  "Gathering",
];
