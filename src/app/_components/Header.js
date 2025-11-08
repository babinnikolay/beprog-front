import React from "react";
import { appName } from "@/app/_lib/constants";

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-gray-900">{appName}</div>
          <div className="space-x-4">
            <a href="/signin" className="text-gray-600 hover:text-gray-900">
              Войти
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
