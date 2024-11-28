import ConfigButton from "./controls/ConfigButton"


export default function ConfigBar() {
  return (
    <div className="h-auto w-14 bg-ore-obsidian-black border-l-[3px] border-ore-pitch-black">
        <ConfigButton img="/assets/config/settings.png" tooltip="Settings"/>
    </div>
  )
}