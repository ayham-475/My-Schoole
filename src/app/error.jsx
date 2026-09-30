
'use client';

export default function Error({ error, reset }) {
  return (
    <div className="mx-auto max-w-2xl mt-10 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/50 rounded-2xl p-8 text-center shadow-sm">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-500 mb-4">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <p className="text-rose-600 dark:text-rose-400 font-semibold text-lg">
        فشل في تحميل البيانات، تأكد من وجود الملفات المطلوبة.
      </p>
      <button 
        onClick={() => reset()} 
        className="mt-6 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-xl transition-all duration-200 shadow-md active:scale-95"
      >
        حاول مجدداً
      </button>
    </div>
  );
}