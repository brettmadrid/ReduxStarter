// action creator is a function that creates actions
// aka a function that returns an action object
export const toggleEditing = () => {
  console.log("toggleEditing running...");
  // returned obj is an action
  return {
    type: "TOGGLE_EDITING",
  };
};

export const updateTitle = (newTitle) => {
  return { type: "UPDATE_TITLE", payload: newTitle };
};

export const updateMemberList = (newMember) => {
  return { type: "UPDATE_MEMBER_LIST", payload: newMember };
};
