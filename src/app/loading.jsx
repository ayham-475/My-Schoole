export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-5">
      <div className="w-14 h-14 border-4 border-indigo-100 dark:border-slate-800 border-t-indigo-600 dark:border-t-indigo-500 rounded-full animate-spin shadow-md"></div>
      <p className="text-slate-500 dark:text-slate-400 font-medium animate-pulse">
        جاري  التحميل...
      </p>
    </div>
  );
}