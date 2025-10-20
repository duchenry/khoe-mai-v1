// ...existing code...
import LoadingSpinner from "./components/LoadingSpinner";

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 p-3 shadow-lg">
          <div className="w-10 h-10 bg-white/30 rounded-full" />
        </div>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Loading…</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md text-center">
          Đang tải nội dung, xin chờ một chút.
        </p>
        <LoadingSpinner size="md" />
      </div>
    </div>
  );
}
