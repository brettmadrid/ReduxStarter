import React from "react";
import "./App.css";

import Title from "./components/Title";
import DragonList from "./components/DragonList";

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

export default App;

// workflow:
// connect component to store if needed
// if event needs to update state:
//   - create action creator an an action
//   - import action creator and pass into connect
//   - build a case in the reducer file for that action
