import { useState } from "react";
import "./Edit.css";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
// import { update } from "../../redux/userSlice";
import { updateUser } from "../../redux/apiRequests";

function Edit({ setEdit }) {
  const avaUrl = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://i.redd.it/mozfkrjpoa261.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];
  const user = useSelector((state) => state.user);
  const dispath = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avaUrl) ;

  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleTheme = (e) => setTheme(e.target.value);
  const handleAbout = (e) => setAbout(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name,
      about,
      age,
      avaUrl: url,
      themeColor: theme
    };
    // dispath(update(updatedUser));
    updateUser(updatedUser, dispath)
  };
  return (
    <>
      <form>
        <section className="edit-container">
          <button className="close" onClick={handleSubmit}>
            SAVE
          </button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input
              title={"Display name"}
              placeholder={user.name}
              handleOnChange={handleName}
            />
            <Input
              title={"Age"}
              placeholder={user.age}
              handleOnChange={handleAge}
            />
            <Input
              title={"About"}
              placeholder={user.about}
              type="textarea"
              handleOnChange={handleAbout}
            />

            <label htmlFor="">Profile picture</label>
            <div className="input-image-container">
              {avaUrl.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt=""
                  className="input-image"
                  onClick={(e) => setUrl(e.target.src)}
                />
              ))}
            </div>

            <div className="theme-container">
              <label>Theme</label>
              <input
                type="color"
                className="theme-color"
                onChange={handleTheme}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );
}

export default Edit;
