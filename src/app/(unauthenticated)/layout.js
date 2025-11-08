export default function UnauthenticatedLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-gray-900">Your App</div>
            <div className="space-x-4">
              <a href="/signin" className="text-gray-600 hover:text-gray-900">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
