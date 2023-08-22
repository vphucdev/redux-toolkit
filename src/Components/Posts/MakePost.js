import { useState } from "react";
import Input from "../Input/Input";
import './Post.css'

function MakePost() {
const [title, setTitle] = useState('add a title')
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save">post</p>
          </div>
          <Input title='Title' type='textarea' className='makepost-title' placeholder={title} handleOnChange={setTitle} />
    </section>
  );
}

export default MakePost;
