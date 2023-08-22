import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Edit from "./Components/Edit/Edit";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import MakePost from "./Components/Posts/MakePost";

function App() {
  const [edit, setEdit] = useState(false);
  const [openPost, setOpenPost] = useState(false);

  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {edit ? <Edit setEdit={setEdit} /> : <Header setEdit={setEdit} />}
      {pending && <p className="loading">Loading...</p>}
      {!edit && error && <p className="error">Error when fetching data</p>}
      {openPost && <MakePost /> }

      <Footer openPost={openPost} setOpenPost={setOpenPost} />
    </div>
  );
}

export default App;
