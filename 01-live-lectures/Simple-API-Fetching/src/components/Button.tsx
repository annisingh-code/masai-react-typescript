interface ButtonProps {
  label: string;
  type?: "button" | "submit";
}

const Button: React.FC<ButtonProps> = ({ label, type = "button" }) => {
  return <button type={type}>{label}</button>;
};

export default Button;
