import { useReducer } from "react";
import { defState, type Action, type S } from "./types";
import T from "./T";
import { useInterval } from "./helpers";

function gameReducer(state: S, action: Action): S {
  switch (action.type) {
    case "set_p":
      return { ...state, p: action.p };
    case "set_view":
      return { ...state, v: action.v };
    case "tick":
      return { ...state, p: state.p + 1 };
    default:
      return state;
  }
}

function App() {
  const [s, d] = useReducer(gameReducer, defState);
  useInterval(() => d({ type: "tick" }), 1000);

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
          <section>
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
