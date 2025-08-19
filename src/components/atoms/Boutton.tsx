import React from "react";

type ButtonProps = {
  className?: string;
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  label = "Join Macro Now",
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      style={styles.button}
    >
      {label}
    </button>
  );
};

export default Button;

const styles = {
  button: {
    padding: "8px 20px",
    border: "none",
    borderRadius: "24px",
    cursor: "pointer",
    background:
      "linear-gradient(90.19deg, #83FF8F -13.58%, #CC7FF0 120.82%)",
    fontFamily: '"Clash Display", sans-serif',
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center" as const,
    color: "#000000",
  },
};
