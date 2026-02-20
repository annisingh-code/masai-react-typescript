const InputLogger = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input Value:", e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleInputChange}
      className="border p-2 mt-4 w-half"
    />
  );
};

export default InputLogger;
