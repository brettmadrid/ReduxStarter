import React, { useState } from "react";

const DragonList = () => {
  const [newMember, setNewMember] = useState("");
  const [members, setMembers] = useState([
    { name: "Ethan Madrid", dragonStatus: true },
    { name: "Brett Madrid", dragonStatus: false },
  ]);

  const handleChanges = (e) => {
    setNewMember(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="friends-list">
        {members.map((member, index) => (
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
        <button>Add member</button>
      </div>
    </React.Fragment>
  );
};

export default DragonList;
