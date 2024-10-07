import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto p-4 school-bg min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl glass-effect">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-primary">ברוכים הבאים למערכת ניהול המטלות</CardTitle>
          <CardDescription className="text-center text-xl">הפלטפורמה המתקדמת לניהול ומעקב אחר מטלות, ציונים ותקשורת בבית הספר</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-6">
          <Link href="/student-dashboard" passHref>
            <Button size="lg" className="w-64 h-16 text-lg">
              <GraduationCap className="mr-2 h-6 w-6" />
              כניסה לתלמידים
            </Button>
          </Link>
          <Link href="/teacher-dashboard" passHref>
            <Button size="lg" variant="outline" className="w-64 h-16 text-lg">
              <BookOpen className="mr-2 h-6 w-6" />
              כניסה למורים
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">צריכים עזרה? <Link href="/support" className="text-primary hover:underline">צרו קשר עם צוות התמיכה</Link></p>
        </CardFooter>
      </Card>
    </div>
  );
}