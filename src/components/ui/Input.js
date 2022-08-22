function Input({ type, placeholder, name, onChange, value }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
