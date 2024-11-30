import React from "react";

interface OreUIButtonProps {
  label: string;
  onClick: () => void;
  type?: "primary" | "secondary" | "danger" | "dark";
  disabled?: boolean;
}

const OreUIButton: React.FC<OreUIButtonProps> = ({ label, onClick, type = "primary", disabled = false }) => {
  const baseStyle = "m-1 select-none pl-6 pr-6 p-2 active:border-none active:translate-y-2 active:mb-2";
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";

  const outlinesStyles = {
    primary: "shadow-[inset_0_0_0_2px_white]",
    secondary: "shadow-[inset_0_0_0_2px_#3CA027]",
    danger: "shadow-[inset_0_0_0_2px_#FF4747]",
    dark: "shadow-[inset_0_0_0_2px_#646464]"
  };


  const typeStyle = {
    primary: "text-black bg-oreui-light border-b-8 border-oreui-light-sh",
    secondary: "text-white bg-oreui-green border-b-8 border-oreui-green-sh",
    danger: "text-white bg-oreui-red border-b-8 border-oreui-red-sh",
    dark: "text-white bg-oreui-dark border-b-8 border-oreui-dark-sh"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`oreui-button ${baseStyle} ${typeStyle[type]} ${outlinesStyles[type]} ${disabledStyle}`}
    >
      {label}
    </button>
  );
}

export default OreUIButton;
