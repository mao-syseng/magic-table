import TCell from "./TCell";
import type { S, Digit } from "./types";

const c: Digit[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const r: Digit[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const l = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export default function T({ s }: { s: S }) {
  return (
    <div className="overflow-auto">
      <table className="striped" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th scope="col">↘</th>
            {l.map((x) => (
              <th key={x} scope="col">
                {x}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {r.map((x) => (
            <tr key={x}>
              <th scope="row">{x}</th>
              {c.map((y) => (
                <TCell
                  key={`${x}-${y}`}
                  isPlayer={s.pos[0] === y && s.pos[1] === x}
                  isTrail={s.trail.some(([tx, ty]) => tx === y && ty === x)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
