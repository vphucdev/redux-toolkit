import { useState } from "react";
import Input from "../Input/Input";
import "./Post.css";

function MakePost() {
  const [title, setTitle] = useState("add a title");
  const [desc, setDesc] = useState("add some description");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const tags = ["None", "NSFW", "Mood", "Qoutes", "Shitpost"];
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save">Post</p>
      </div>
      <Input
        title="Title"
        type="textarea"
        className="makepost-title"
        placeholder={title}
        handleOnChange={setTitle}
      />
      <Input
        title="Descriptions"
        type="textarea"
        className="makepost-desc"
        placeholder={desc}
        handleOnChange={setDesc}
      />
      <label> Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={
              selectedIndex === index
                ? "makepost-tags-selected"
                : `makepost-tags-${tag}`
            }
            onClick={() => setSelectedIndex(index)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}

export default MakePost;
