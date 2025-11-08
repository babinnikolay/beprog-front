import React from "react";
import SidebarPart from "@/app/_components/SidebarPart";
import SidebarLesson from "@/app/_components/SidebarLesson";

const content = {
  parts: [
    {
      id: 1,
      name: "Start",
      type: "part",
      locked: false,
      done: true,
    },
    {
      id: 2,
      name: "Catalogs",
      type: "part",
      locked: false,
      done: true,
    },
    {
      id: 3,
      name: "Documents",
      type: "part",
      locked: true,
      done: false,
    },
  ],
  lessons: [
    {
      id: 100,
      name: "About",
      type: "lesson",
      parent: 1,
      locked: false,
      done: true,
    },
    {
      id: 101,
      name: "Get Started",
      type: "lesson",
      parent: 1,
      locked: false,
      done: true,
    },
    {
      id: 201,
      name: "Get Started",
      type: "lesson",
      parent: 2,
      locked: false,
      done: true,
    },
    {
      id: 202,
      name: "Task Assignment",
      type: "lesson",
      parent: 2,
      locked: false,
      done: false,
    },
    {
      id: 203,
      name: "Task Execution",
      type: "lesson",
      parent: 2,
      locked: true,
      done: false,
    },
    {
      id: 301,
      name: "Closed lesson",
      type: "lesson",
      parent: 3,
      locked: true,
      done: false,
    },
    {
      id: 302,
      name: "Closed lesson",
      type: "lesson",
      parent: 3,
      locked: true,
      done: false,
    },
    {
      id: 303,
      name: "Closed lesson",
      type: "lesson",
      parent: 3,
      locked: true,
      done: false,
    },
    {
      id: 304,
      name: "Closed lesson",
      type: "lesson",
      parent: 3,
      locked: true,
      done: false,
    },
  ],
};

function SidebarTree() {
  return (
    <div className="">
      {content.parts.map((part) => (
        <SidebarPart key={part.id} part={part}>
          {content.lessons
            .filter((lesson) => lesson.parent === part.id)
            .map((lesson) => (
              <SidebarLesson key={lesson.id} lesson={lesson} />
            ))}
        </SidebarPart>
      ))}
    </div>
  );
}

export default SidebarTree;
