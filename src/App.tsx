import { useReducer } from "react";
import { defState, type A, type S } from "./types";
import T from "./T";
import { useInterval, step } from "./helpers";

function reducer(s: S, a: A): S {
  switch (a.type) {
    case "set_p":
      return { ...s, p: a.p };
    case "set_view":
      return { ...s, v: a.v };
    case "set_dir":
      return { ...s, dir: a.dir };
    case "tick": {
      const newPos = step(s.pos, s.dir);
      const [nx, ny] = newPos;
      if (nx < 0 || nx > 9 || ny < 0 || ny > 9) return s;
      const newTrail = [...s.trail, s.pos].slice(-5);
      return { ...s, pos: newPos, p: s.p + 1, trail: newTrail };
    }
    default:
      return s;
  }
}

function App() {
  const [s, d] = useReducer(reducer, defState);
  useInterval(() => d({ type: "tick" }), 400);

  const h = (e: React.KeyboardEvent) => {
    console.log(e.key);

    const m: Record<string, number> = {
      ArrowUp: 0,
      ArrowRight: 1,
      ArrowDown: 2,
      ArrowLeft: 3,
    };
    if (e.key in m) {
      e.preventDefault();
      d({ type: "set_dir", dir: m[e.key] as 0 | 1 | 2 | 3 });
    }
  };

  return (
    <>
      <header>
        <hgroup>
          <h1>Magic Table</h1>
          <p>Web based incremental game inspired by Magic Garden(UFO 50)</p>
        </hgroup>
      </header>

      {s.v === 0 && (
        <>
          <p className="grid">
            <button onClick={() => d({ type: "set_view", v: 1 })}>
              Go to Table
            </button>
            <button
              className="secondary"
              onClick={() => d({ type: "set_view", v: 2 })}
            >
              Upgrades
            </button>
          </p>
        </>
      )}
      {s.v === 1 && (
        <>
          <h3>Table</h3>
          <section tabIndex={0} onKeyDown={h}>
            <T s={s}></T>
          </section>
          <p></p>
        </>
      )}
      {s.v === 2 && (
        <>
          <h3>Upgrades</h3>
          <p>
            <button
              className="secondary"
              onClick={() => d({ type: "set_view", v: 0 })}
            >
              Go back
            </button>
          </p>
          <article>
            <h4>Upgrades</h4>
          </article>
        </>
      )}
      <article>
        <p className="grid">
          <b data-tooltip="Points">* {s.p}</b>
        </p>
      </article>
    </>
  );
}

export default App;
