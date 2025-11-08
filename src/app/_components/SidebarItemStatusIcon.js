import React from "react";
import { Book, BookCheck, BookOpen, Lock } from "lucide-react";

function SidebarItemStatusIcon({ item }) {
  let icon;
  if (item.locked) {
    icon = <Lock />;
  } else if (item.done) {
    icon = <BookCheck />;
  } else if (item.parent) {
    icon = <BookOpen />;
  } else {
    icon = <Book />;
  }
  return <div> {icon} </div>;
}

export default SidebarItemStatusIcon;
