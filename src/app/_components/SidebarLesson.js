import React from "react";
import SidebarItemStatusIcon from "@/app/_components/SidebarItemStatusIcon";

function SidebarLesson({ lesson }) {
  return (
    <div className="space-y-1">
      <div
        className={`pl-6 hover:bg-gray-400 border bg-gray-200 border-gray-300 rounded-md p-2 flex flex-row gap-2 ${lesson.locked ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <SidebarItemStatusIcon item={lesson} />
        {lesson.name}
      </div>
    </div>
  );
}

export default SidebarLesson;
