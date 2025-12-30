import { useReducer } from "react";
import type { Action, S } from "./types";
import T from "./T";
import { useInterval } from "./helpers";

const initialState: S = {
  view: "start",
  pos: "00",
  dir: 0,
  p: 0,
  rc: 0,
};

function gameReducer(state: S, action: Action): S {
  switch (action.type) {
    case "set_p":
      return { ...state, p: action.p };
    case "set_view":
      return { ...state, view: action.view };
    case "tick":
      return { ...state, p: state.p + 1 };
    default:
      return state;
  }
}

function App() {
  const [s, d] = useReducer(gameReducer, initialState);
  useInterval(() => d({ type: "tick" }), 1000);

  return (
    <>
      <header>
        <hgroup>
          <h1>Magic Table</h1>
          <p>Web based incremental game inspired by Magic Garden(UFO 50)</p>
        </hgroup>
      </header>

      {s.view === "start" && (
        <>
          <p className="grid">
            <button onClick={() => d({ type: "set_view", view: "table" })}>
              Go to Table
            </button>
            <button
              className="secondary"
              onClick={() => d({ type: "set_view", view: "upgrades" })}
            >
              Upgrades
            </button>
          </p>
        </>
      )}
      {s.view === "table" && (
        <>
          <h3>Table</h3>
          <section>
            <T s={s}></T>
          </section>
          <p></p>
        </>
      )}
      {s.view === "upgrades" && (
        <>
          <h3>Upgrades</h3>
          <p>
            <button
              className="secondary"
              onClick={() => d({ type: "set_view", view: "start" })}
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
