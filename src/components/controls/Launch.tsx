import { invoke } from "@tauri-apps/api/core"

const openMinecraft = () => {
  invoke('open_minecraft')
    .then(() => console.log('Minecraft is opened!'))
    .catch((e) => console.error(e))
};

export default function Launch() {
  return (
    <button 
      onClick={openMinecraft}
      className="absolute right-0 mr-14 p-2 pl-14 pr-14 bg-green-700 font-minecraft text-white border-b-8 border-green-800 hover:bg-green-600 hover:border-green-700 active:scale-95"
    >
      Launch Minecraft
    </button>
  )
}
