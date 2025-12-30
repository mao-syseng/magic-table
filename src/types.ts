export type V = "start" | "table" | "upgrades";

export interface S {
  view: V;
  pos: string;
  dir: number;
  p: number;
  rc: number;
}

export type Action =
  | { type: "set_p"; p: number }
  | { type: "set_view"; view: V }
  | { type: "tick" };
