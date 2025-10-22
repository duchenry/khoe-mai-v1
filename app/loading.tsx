export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-4">
      <div className="flex flex-col items-center gap-4 animate-fadeIn">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-indigo-300 border-t-indigo-600 rounded-full animate-spin" />
        </div>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Đang tải…</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md text-center">
          Vui lòng chờ một chút nhé.
        </p>
      </div>
    </div>
  );
}
