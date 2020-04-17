import React, { useState } from "react";

import { connect } from "react-redux";
import { updateMemberList } from "../actions/titleActions";

const DragonList = (props) => {
  const [newMember, setNewMember] = useState("");

  const handleChanges = (e) => {
    setNewMember(e.target.value);
  };

  const updateMember = (e) => {
    props.updateMemberList(newMember);
    setNewMember("");
  };

  return (
    <React.Fragment>
      <div className="friends-list">
        {props.members.map((member, index) => (
          <h4 key={index}>
            {member.name}
            {member.dragonStatus && <i className="fas fa-dragon" />}
          </h4>
        ))}
        <input
          type="text"
          value={newMember}
          onChange={handleChanges}
          placeholder="Add new member"
        />
        <button onClick={() => updateMember()}>Add member</button>
      </div>
    </React.Fragment>
  );
};

const mstp = (state) => {
  return {
    members: state.members,
  };
};

export default connect(mstp, { updateMemberList })(DragonList);
