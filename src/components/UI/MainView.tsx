import { OreUIContainer } from "../OreUI"
import Controls from "./Controls"

export default function MainView() {
  return (
    <div className="w-full h-full">
      <OreUIContainer id="MainView" className="w-full h-[calc(80%)] border-l-0"></OreUIContainer>
      <Controls/>
    </div>
  )
}
