export const initialState = {
  title: "Dragon Member List 🐲",
  editing: false,
  members: [
    { name: "Ethan Madrid", dragonStatus: true },
    { name: "Brett Madrid", dragonStatus: false },
  ],
};

export const titleReducer = (state = initialState, action) => {
  console.log("reducer state", state, action);
  switch (action.type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload,
        editing: false,
      };
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing,
      };
    case "UPDATE_MEMBER_LIST":
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, dragonStatus: true },
        ],
      };
    default:
      return state;
  }
};
