/**
 * 🎓 دكتورك يتحدث:
 * مجلد الـ Utils (أو المساعدين): هنا نضع أي دالة برمجية (Function) 
 * لا علاقة لها بالـ React بشكل مباشر، بل تؤدي وظيفة عامة بحتة.
 * 
 * مثال: دالة لتنسيق التاريخ، دالة لحساب المعدل التراكمي للطالب، 
 * أو دالة لتحويل الحروف الأولى إلى كابيتال.
 * 
 * الفائدة: إبقاء مكونات React نظيفة من العمليات الحسابية المعقدة،
 * وسهولة اختبار (Testing) هذه الدوال بشكل منفصل.
 */

/**
 * دالة مساعدة لتنسيق التاريخ ليظهر بشكل جميل للمستخدم
 * @param {string | Date} date 
 * @returns {string} التاريخ المنسق
 */
export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d);
};

/**
 * دالة مساعدة لحساب نسبة الحضور للطالب
 * @param {number} totalDays 
 * @param {number} presentDays 
 * @returns {number} النسبة المئوية
 */
export const calculateAttendancePercentage = (totalDays, presentDays) => {
  if (totalDays === 0) return 0;
  return Math.round((presentDays / totalDays) * 100);
};
