type V = 0 | 1 | 2;
export type Digit = 0|1|2|3|4|5|6|7|8|9;
export type Pos = [Digit, Digit];
export type Dir = 0 | 1 | 2 | 3;

export interface S {
  v: V;
  pos: Pos;
  dir: Dir;
  p: number;
  rc: number;
  trail: Pos[];
}

export type A =
  | { type: "set_p"; p: number }
  | { type: "set_view"; v: V }
  | { type: "set_dir"; dir: Dir }
  | { type: "tick" };

export const defState: S = {
  v: 0,
  pos: [0, 0],
  dir: 1,
  p: 0,
  rc: 0,
  trail: [],
};
