import { invoke } from "@tauri-apps/api/core"

const openMinecraft = () => {
  invoke('open_minecraft')
    .then(() => console.log('Minecraft is opened!'))
    .catch((e) => console.error(e))
};

export default function Launch() {
  const BaseStyle = "absolute right-0 mr-14 p-2 pl-14 pr-14 border-b-8";
  const NormalStyle = "bg-oreui-cloud-gray border-oreui-stone-gray shadow-[inset_0_0_0_2px_#ffffff]"
  const HoverStyle = "hover:bg-oreui-green font-minecraft hover:border-oreui-green-darker hover:shadow-[inset_0_0_0_2px_#3CA027] hover:text-white"
  const ActiveStyle = "active:border-none"

  return (
    <button 
      onClick={openMinecraft}
      className={`${BaseStyle} ${NormalStyle} ${HoverStyle} ${ActiveStyle} anim-sections`}
    >
      Launch Minecraft
    </button>
  )
}
