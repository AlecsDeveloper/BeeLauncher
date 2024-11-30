import OreUiTooltip from "../oreui/Tooltip";

export default function SectionButton({ img, tooltip }: { img: string, tooltip: string }) {
  return (
    <OreUiTooltip title={tooltip} placement="right">
      <button className="w-[78px] h-[78px] border-b-[3px] border-ore-pitch-black flex items-center justify-center bg-ore-iron-gray overflow-hidden group hover:bg-ore-steel-gray">
        <img
          src={img}
          className="w-1/2 h-1/2 border-2 border-white group-hover:scale-105 anim-sections"
        />
      </button>
    </OreUiTooltip>
  );
}