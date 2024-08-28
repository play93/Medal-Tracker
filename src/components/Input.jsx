const Input = ({
  scoreInfo,
  setScoreInfo,
  label,
  inputType,
  placeholder,
  inputName,
}) => {
  //onChange 함수
  const handleOnChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    setScoreInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="inputBox">
        <label>{label}</label>
        <input
          type={inputType}
          name={inputName}
          value={scoreInfo.inputName}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
