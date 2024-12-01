import { Tabs, MainView } from "../UI"

export default function Content() {
  return (
    <div className="flex w-screen h-[calc(100vh-64px)] bg-oreui-obsidian-black">
      <Tabs />
      <MainView/>
    </div>
  )
}