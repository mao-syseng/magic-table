type V = 0 | 1 | 2;

export interface S {
  v: V;
  pos: string;
  dir: number;
  p: number;
  rc: number;
}

export type Action =
  | { type: "set_p"; p: number }
  | { type: "set_view"; v: V }
  | { type: "tick" };

  export const defState: S = {
  v: 0,
  pos: "00",
  dir: 0,
  p: 0,
  rc: 0,
};