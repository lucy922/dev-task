import "../styles/Input.css";

const styles = ["input--primary"];
const sizes = ["input--medium"];

function Input({
  type,
  placeholder,
  name,
  onChange,
  value,
  inputStyle,
  inputSize,
}) {
  const checkInputStyle = styles.includes(inputStyle) ? inputStyle : styles[0];
  const checkInputSize = sizes.includes(inputSize) ? inputSize : sizes[0];

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className={`${checkInputStyle} ${checkInputSize}`}
      />
    </div>
  );
}

export default Input;
