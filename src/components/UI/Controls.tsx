import { OreUIContainer } from "../OreUI"
import Launch from "./Controls/Launch"

export default function Controls() {
  return (
    <OreUIContainer className="flex w-full h-[20%] items-center border-l-0 border-t-0 bg-oreui-obsidian-black">
      <Launch/>
    </OreUIContainer>
  );
}
