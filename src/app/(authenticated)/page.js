import { redirect } from "next/navigation";
import { getUserProgress } from "@/app/_lib/userProgress";
import { auth } from "@/app/_lib/auth";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  const userProgress = await getUserProgress(session.user.id);
  const lastCompletedPart = userProgress?.lastCompletedPart || 1;
  const nextPart = lastCompletedPart + 1;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome Back!</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Your Progress
        </h2>
        <p className="text-gray-600 mb-6">
          You&#39;ve completed up to Part {lastCompletedPart}. Continue your
          journey!
        </p>

        <a
          href={`/parts/part${nextPart}`}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Continue to Part {nextPart}
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((part) => (
          <a
            key={part}
            href={`/parts/part${part}`}
            className={`block p-6 rounded-lg border-2 transition duration-300 ${
              part <= lastCompletedPart
                ? "bg-blue-50 border-blue-200 hover:bg-blue-100"
                : part === nextPart
                  ? "bg-green-50 border-green-200 hover:bg-green-100"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">Part {part}</h3>
            <p className="text-sm text-gray-600">
              {part <= lastCompletedPart
                ? "Completed"
                : part === nextPart
                  ? "Continue Here"
                  : "Locked"}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
