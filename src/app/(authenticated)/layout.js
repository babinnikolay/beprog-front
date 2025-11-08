import { redirect } from "next/navigation";
import { auth } from "@/app/_lib/auth";

export default async function AuthenticatedLayout({ children }) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-gray-900">Your App</div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                Welcome, {session.user?.name}
              </span>
              {/*<LogoutButton />*/}
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
