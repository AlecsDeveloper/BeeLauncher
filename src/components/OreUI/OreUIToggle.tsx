import { useState, MouseEventHandler } from "react";

interface MinecraftToggleProps {
  onToggle?: (state: boolean) => void;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const MinecraftToggle: React.FC<MinecraftToggleProps> = ({ onToggle, onClick }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleColor = isToggled ? "bg-oreui-tg-on" : "bg-oreui-tg-off";
  const togglePosition = isToggled ? "right-0" : "left-0";
  const toggleShadow = isToggled ? "shadow-[inset_0px_0px_4px_#359c45]" : "shadow-[inset_0px_0px_4px_#202020]";

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (onClick) {
      onClick(event); 
    }
    setIsToggled((prev) => {
      const newState = !prev;
      if (onToggle) {
        onToggle(newState);
      }
      return newState;
    });
  };

  return (
    <div
      onClick={handleClick}
      className="w-16 h-8 m-1 bg-transparent flex relative"
    >
      <div className={`absolute bottom-0 w-full h-7 border-outline border-black ${toggleColor} ${toggleShadow}`}></div>
      <div className={`absolute bottom-0 w-1/2 h-full bg-oreui-tg-sq shadow-[inset_0px_-4px_1px_#505050] border-outline border-black ${togglePosition}`}></div>
    </div>
  );
};

export default MinecraftToggle;
