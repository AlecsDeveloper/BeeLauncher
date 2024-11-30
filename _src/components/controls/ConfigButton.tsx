import OreUiTooltip from "../oreui/Tooltip";

export default function ConfigButton({ img, tooltip }: { img: string, tooltip: string }) {
  return (
    <OreUiTooltip  title={tooltip} placement="left">
      <button className="w-14 h-14 flex items-center justify-center overflow-hidden group hover:bg-ore-iron-gray ">
        <img
          src={img}
          className="w-2/3 group-hover:scale-105 anim-sections"
        />
      </button>
    </OreUiTooltip >
  );
}  
