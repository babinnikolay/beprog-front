export default async function StartPart() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Часть 0: Вступление
      </h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-6">
          This is the first part of our journey. This content is available to
          unauthenticated users.
        </p>
        <p className="text-gray-600 mb-8">
          Continue to explore and when you&#39;re ready, sign up to save your
          progress!
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Ready to continue?
          </h3>
          <p className="text-blue-800 mb-4">
            Sign up to save your progress and access the next parts.
          </p>
          <a
            href="/_lib/auth.js/signin"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Sign Up to Continue
          </a>
        </div>
      </div>
    </div>
  );
}
