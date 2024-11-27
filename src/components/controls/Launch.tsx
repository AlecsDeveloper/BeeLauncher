import { invoke } from "@tauri-apps/api/core"

export default function Launch() {
    const openMinecraft = async () => {
        try {
          await invoke('open_minecraft');
          console.log('Minecraft abierto');
        } catch (error) {
          console.error('Error al abrir Minecraft:', error);
        }
    };
    
    return (
    <div>
        <button onClick={openMinecraft}>Launch</button>
    </div>
    )
}
