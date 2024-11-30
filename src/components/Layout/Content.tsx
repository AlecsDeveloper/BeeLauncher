import { Tabs } from "../UI"
import MainView from "../UI/MainView"

export default function Content() {
  return (
    <div className="flex w-screen h-[calc(100vh-64px)] bg-oreui-obsidian-black">
      <Tabs />
      <MainView/>
    </div>
  )
}