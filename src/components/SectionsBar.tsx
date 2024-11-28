import SectionButton from "./controls/SectionButton"

export default function SectionsBar() {
  return (
    <div className="bg-ore-obsidian-black w-[78px] shadow-[2px_0_0_var(--tw-shadow-color)] shadow-ore-pitch-black">
      <SectionButton img="/assets/sections/client.png" tooltip="Bedrock launcher" />
      <SectionButton img="/assets/sections/server.png" tooltip="BDS Manager"/>
    </div>
  )
}