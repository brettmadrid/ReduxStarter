import React, { useState } from "react";
// STEP II - connect the component to the redux store
import { connect } from "react-redux";
import { toggleEditing, updateTitle } from "../actions/titleActions";

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState("");
  //   const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{" "}
          <i onClick={props.toggleEditing} className="far fa-edit" />
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
          <button onClick={() => props.updateTitle(newTitleText)}>
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(
  (state) => {
    return { title: state.title, editing: state.editing };
  },
  { toggleEditing, updateTitle }
)(Title);
