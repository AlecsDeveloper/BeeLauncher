import SectionButton from "./controls/SectionButton"

export default function Sidebar() {
  return (
    <div className="bg-ore-obsidian-black w-[78px] shadow-[2px_0_0_var(--tw-shadow-color)] shadow-ore-pitch-black">
      <SectionButton img="/assets/sections/client.png" />
      <SectionButton img="/assets/sections/server.png" />
    </div>
  )
}