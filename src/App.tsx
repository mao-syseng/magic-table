import { useReducer } from "react";
import { useInterval } from "./useInterval";
import type { GameAction, GameState } from "./types";

const initialState: GameState = {
  view: "museum",
  gold: 0,
  goldPerBirb: 1,
  birbsPerMinute: 2,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "add_gold":
      return { ...state, gold: state.gold + action.amount };
    case "spend_gold":
      return { ...state, gold: Math.max(0, state.gold - action.amount) };
    case "upgrade_gold_per_birb":
      return { ...state, goldPerBirb: state.goldPerBirb + action.amount };
    case "upgrade_birbs_per_minute":
      return { ...state, birbsPerMinute: state.birbsPerMinute + action.amount };
    case "set_view":
      return { ...state, view: action.view };
    case "tick":
      const goldFromBirbs = state.birbsPerMinute * state.goldPerBirb;
      return { ...state, gold: state.gold + goldFromBirbs };
    default:
      return state;
  }
}

function App() {
  const [s, d] = useReducer(gameReducer, initialState);
  useInterval(() => d({ type: "tick" }), 1000);

  return (
    <main className="container">
      <header>
        <hgroup>
          <h1>Incremental Game</h1>
          <p>Web based incremental game inspired by Digseum</p>
        </hgroup>
      </header>

      {s.view === "museum" && (
        <>
          <h3>Museum</h3>

          <div className="grid">
            <button onClick={() => d({ type: "set_view", view: "upgrades" })}>
              Upgrades
            </button>
            <button
              className="secondary"
              onClick={() => d({ type: "set_view", view: "excavate" })}
            >
              Excavate
            </button>
          </div>
        </>
      )}
      {s.view === "excavate" && (
        <>
          <h3>Excavate</h3>
          <button
            className="secondary"
            onClick={() => d({ type: "set_view", view: "museum" })}
          >
            Back to Museum
          </button>
          <article>
            <p>You can excavate here to find new birbs!</p>
          </article>
        </>
      )}
      {s.view === "upgrades" && (
        <>
          <h3>Upgrades</h3>
          <button
            className="secondary"
            onClick={() => d({ type: "set_view", view: "museum" })}
          >
            Back to Museum
          </button>
          <article>
            <p>Upgrade your birbs here!</p>
          </article>
        </>
      )}
      <article>
        <p>
          <em data-tooltip="Gold per birb">G/B: {s.goldPerBirb}</em>
        </p>
        <p>
          <em data-tooltip="Birbs per minute">B/M: {s.birbsPerMinute}</em>
        </p>
        <p>
          <em data-tooltip="Gold">G: {s.gold}</em>
        </p>
      </article>
    </main>
  );
}

export default App;
