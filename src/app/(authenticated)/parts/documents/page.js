import { redirect } from "next/navigation";
import { auth } from "@/app/_lib/auth";
import { completePart } from "@/app/_lib/userProgress";

export default async function Part2() {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin");
  }

  async function handleComplete() {
    "use server";
    await completePart(session.user.id, 2);
    redirect("/dashboard");
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Part 2: Deep Dive
      </h1>

      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          This is the second part of your journey. Here you&#39;ll learn more
          advanced concepts.
        </p>
        {/* Добавьте контент для части 2 */}
      </div>

      <form action={handleComplete}>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        >
          Complete Part 2
        </button>
      </form>
    </div>
  );
}
