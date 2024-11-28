import ControlsBar from "./ControlsBar";
import ConfigBar from "./ConfigBar";

export default function MainView() {
  return (
    <div className="h-full w-full ml-[3px] bg-ore-charcoal">
      
      <div className="flex h-[calc(100%-128px)] overflow-hidden">
        <img src="/assets/wallpapers/buzzybees.png" className="w-full h-auto object-cover" />

        <ConfigBar />
      </div>

      <ControlsBar />
    </div>
  );
}
