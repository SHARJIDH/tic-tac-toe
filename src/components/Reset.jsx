import React from "react";
import GameState from "./GameState";

export const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
};
