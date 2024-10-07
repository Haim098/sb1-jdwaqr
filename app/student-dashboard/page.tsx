"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Upload, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import AssignmentUploader from '@/components/AssignmentUploader';
import AssignmentList from '@/components/AssignmentList';
import GradesList from '@/components/GradesList';
import Calendar from '@/components/Calendar';
import Toast from '@/components/Toast';

export default function StudentDashboard() {
  const { toast, showToast } = useToast();
  const [activeTab, setActiveTab] = useState('upload');

  const handleUploadSuccess = () => {
    showToast({
      title: "מטלה הועלתה בהצלחה",
      description: "המורה יבדוק את המטלה בקרוב",
      duration: 5000,
    });
  };

  return (
    <div className="container mx-auto p-4 school-bg min-h-screen">
      <Card className="w-full max-w-6xl mx-auto mt-8 glass-effect">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">לוח הבקרה של התלמיד</CardTitle>
          <CardDescription className="text-center text-lg">נהל את המטלות, הציונים ולוח הזמנים שלך</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="upload">העלאת מטלה</TabsTrigger>
              <TabsTrigger value="assignments">המטלות שלי</TabsTrigger>
              <TabsTrigger value="grades">הציונים שלי</TabsTrigger>
              <TabsTrigger value="calendar">לוח זמנים</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <AssignmentUploader onUploadSuccess={handleUploadSuccess} />
            </TabsContent>
            <TabsContent value="assignments">
              <AssignmentList />
            </TabsContent>
            <TabsContent value="grades">
              <GradesList />
            </TabsContent>
            <TabsContent value="calendar">
              <Calendar />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" passHref>
            <Button variant="outline">חזרה לדף הבית</Button>
          </Link>
          <Button onClick={() => setActiveTab('calendar')}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            צפה בלוח הזמנים
          </Button>
        </CardFooter>
      </Card>
      {toast && (
        <Toast
          title={toast.title}
          description={toast.description}
          duration={toast.duration}
          onClose={() => {}}
        />
      )}
    </div>
  );
}