import Launch from "./controls/Launch";
import VersionManager from "./controls/VersionManager";

export default function ControlsBar() {
  return (
    <div className="flex items-center h-32 w-full bg-ore-charcoal border-t-[3px] border-ore-pitch-black">
        <VersionManager />
        <Launch />
    </div>
  )
}
