import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Edit from "./Components/Edit/Edit";

function App() {
  const [edit, setEdit] = useState(false);
  return (
    <div className="App">{edit ? <Edit setEdit={setEdit} /> :  <Header setEdit={setEdit} />}</div>
  );
}

export default App;
