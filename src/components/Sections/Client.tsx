import { OreUIContainer } from "../OreUI"
import { Controls } from "../UI"

export default function Client() {
  return (
    <>
      <OreUIContainer className="w-full h-[80%] border-l-0 text-white" id="tabContent">
        <header className="text-2xl font-minecraft">Client Section!</header>
      </OreUIContainer>
      <Controls/>
    </>
  )
}
