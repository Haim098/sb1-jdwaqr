import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const rubik = Rubik({ subsets: ['latin', 'hebrew'] });

export const metadata: Metadata = {
  title: 'מערכת ניהול מטלות בית הספר',
  description: 'פלטפורמה מתקדמת לניהול מטלות, ציונים ותקשורת בין מורים ותלמידים',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body className={rubik.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}