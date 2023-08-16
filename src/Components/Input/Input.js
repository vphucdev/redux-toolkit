import '../Edit/Edit.css';
function Input({ title, handleOnChange = () => { }, placeholder, type }) {
  return (
    <>
      <label>{title}</label>
      {type === 'textarea' ? (
        <textarea
          className="input-about"
          onChange={handleOnChange}
        ></textarea>
      ) : (
        <input type="text" placeholder={placeholder} onChange={handleOnChange} />
      )}
    </>
  );
}

export default Input;
