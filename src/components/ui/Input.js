import "../styles/Input.css";

const styles = ["input--primary"];

function Input({ type, placeholder, name, onChange, value, inputStyle }) {
  const checkInputStyle = styles.includes(inputStyle) ? inputStyle : styles[0];

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        className={`${checkInputStyle}`}
      />
    </div>
  );
}

export default Input;
