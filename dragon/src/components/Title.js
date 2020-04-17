import React, { useState, useReducer } from "react";

import { initialState, titleReducer } from "../reducers/titleReducer";

// STEP II - connect the component to the redux store

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState("");
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editingOnProps ? (
        <h1>
          {state.title}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: "UPDATE_TITLE", payload: newTitleText })
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;
