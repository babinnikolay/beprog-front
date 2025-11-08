import Header from "@/app/_components/Header";
import Sidebar from "@/app/_components/Sidebar";

export default function UnauthenticatedLayout({ children }) {
  return (
    <div className=" bg-gray-50 min-h-screen">
      <Header />
      <div className="grid grid-cols-[250px_1fr] h-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
