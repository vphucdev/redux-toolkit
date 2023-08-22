import "../Edit/Edit.css";
import "../Posts/Post.css";
function Input({
  title,
  handleOnChange = () => {},
  placeholder,
  type,
  className,
  data,
}) {
  return (
    <>
      <label>{title}</label>
      {type === "textarea" ? (
        <textarea
          type="text"
          className={className}
          onChange={handleOnChange}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type="text"
          className={className}
          placeholder={placeholder}
          onChange={handleOnChange}
        />
      )}
    </>
  );
}

export default Input;
