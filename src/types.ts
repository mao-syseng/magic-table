export type View = "start" | "museum" | "levels" | "excavate" | "upgrades";

export interface GameState {
  view: View;
  gold: number;
  goldPerBirb: number;
  birbsPerMinute: number;
}

export type GameAction =
  | { type: "add_gold"; amount: number }
  | { type: "spend_gold"; amount: number }
  | { type: "add_birb"; count?: number }
  | { type: "upgrade_gold_per_birb"; amount: number }
  | { type: "upgrade_birbs_per_minute"; amount: number }
  | { type: "set_view"; view: View }
  | { type: "tick" };
