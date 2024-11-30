import { OreUITabs } from "../OreUI"

export default function Tabs() {
  return (
    <div 
      className="w-[60px] h-full bg-oreui-obsidian-black border-r-[3px] border-t-[3px] border-oreui-pitch-black"
    >
      <OreUITabs
        initialTab={0}
        tabs={[
          { image: "/assets/sections/client.png", content: <div>Client Section</div> },
          { image: "/assets/sections/server.png", content: <div>Server Section</div> },
        ]}
        ContentWrapper="#MainView"
      />

    </div>
  )
}