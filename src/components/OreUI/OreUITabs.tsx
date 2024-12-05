import { ReactNode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

interface OreUITabsProps {
  initialTab?: number;
  tabs: { image?: string; content: ReactNode }[];
  ContentWrapper: string;
}

export default function OreUITabs({ initialTab = 0, tabs, ContentWrapper }: OreUITabsProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const rootRef = useRef<ReturnType<typeof createRoot> | null>(null);

  useEffect(() => {
    const container = document.querySelector(ContentWrapper);
    if (!container) {
      console.error(`No container found for selector: ${ContentWrapper}`);
      return;
    }

    if (!rootRef.current) {
      rootRef.current = createRoot(container);
    }

    const activeContent = tabs[activeTab]?.content;
    rootRef.current.render(activeContent);

  }, [activeTab, ContentWrapper, tabs]);

  return (
    <div className="flex w-full flex-col">
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        const baseStyle = `peer border-b-[2px] border-oreui-pitch-black w-full aspect-square shadow-[inset_0_0_0_3px_${isActive ? "#3CA027" : "white"}] ${isActive ? "bg-oreui-green" : "bg-oreui-cloud-gray"}`;
        const imageStyle = tab.image ? "flex items-center justify-center" : "";

        return (
          <button
            key={index}
            className={`${baseStyle} ${imageStyle} group`}
            onClick={() => setActiveTab(index)}
          >
            {tab.image && (
              <img
                src={tab.image}
                className={`w-1/2 transition-transform duration-200 transform group-hover:scale-105 ${isActive ? "border-2 scale-105" : ""}`}
                alt={`Tab ${index} image`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}