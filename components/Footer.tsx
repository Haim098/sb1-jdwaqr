import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">מערכת בית הספר</h3>
            <p className="text-sm">פלטפורמה מתקדמת לניהול מטלות, ציונים ותקשורת בין מורים ותלמידים</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">קישורים מהירים</h4>
            <ul className="text-sm">
              <li><Link href="/student-dashboard" className="hover:underline">אזור תלמידים</Link></li>
              <li><Link href="/teacher-dashboard" className="hover:underline">אזור מורים</Link></li>
              <li><Link href="/support" className="hover:underline">תמיכה</Link></li>
              <li><Link href="/privacy" className="hover:underline">מדיניות פרטיות</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-md font-semibold mb-2">צור קשר</h4>
            <p className="text-sm">טלפון: 03-1234567</p>
            <p className="text-sm">אימייל: info@school-system.com</p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} מערכת בית הספר. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}