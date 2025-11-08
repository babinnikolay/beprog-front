import React from "react";
import SidebarItemStatusIcon from "@/app/_components/SidebarItemStatusIcon";

function SidebarPart({ part, children }) {
  return (
    <div className="space-y-1 pt-2 px-2" key={part.id}>
      <div
        className={` font-bold hover:bg-gray-400 border bg-gray-200 border-gray-300 rounded-md p-2 flex flex-row gap-2 ${part.locked ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <SidebarItemStatusIcon item={part} />
        {part.name}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export default SidebarPart;
