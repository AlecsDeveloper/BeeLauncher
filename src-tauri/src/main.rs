use std::process::Command;

#[tauri::command]
fn open_minecraft() -> Result<(), String> {
    let output = Command::new("powershell")
        .arg("-Command")
        .arg("Start-Process minecraft://")
        .output();

    match output {
        Ok(output) => {
            if !output.status.success() {
                Err("Error al abrir Minecraft".to_string())
            } else {
                Ok(())
            }
        }
        Err(e) => Err(format!("Fallo al ejecutar el comando: {}", e)),
    }
}

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![open_minecraft])
        .run(tauri::generate_context!())
        .expect("Error al ejecutar Tauri");

    beelauncher_lib::run();
}
