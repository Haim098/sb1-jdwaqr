"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, PlusCircle, BarChart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import NewAssignmentForm from '@/components/NewAssignmentForm';
import AssignmentReviewList from '@/components/AssignmentReviewList';
import StudentProgressReport from '@/components/StudentProgressReport';
import ClassOverview from '@/components/ClassOverview';
import Toast from '@/components/Toast';

export default function TeacherDashboard() {
  const { toast, showToast } = useToast();
  const [activeTab, setActiveTab] = useState('new-assignment');

  const handleNewAssignment = () => {
    showToast({
      title: "מטלה חדשה נוצרה בהצלחה",
      description: "התלמידים יוכלו לראות את המטלה החדשה בלוח המטלות שלהם",
      duration: 5000,
    });
  };

  return (
    <div className="container mx-auto p-4 school-bg min-h-screen">
      <Card className="w-full max-w-6xl mx-auto mt-8 glass-effect">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">לוח הבקרה של המורה</CardTitle>
          <CardDescription className="text-center text-lg">נהל מטלות, בדוק עבודות ועקוב אחר התקדמות התלמידים</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="new-assignment">מטלה חדשה</TabsTrigger>
              <TabsTrigger value="review">בדיקת עבודות</TabsTrigger>
              <TabsTrigger value="progress">התקדמות תלמידים</TabsTrigger>
              <TabsTrigger value="overview">סקירת כיתה</TabsTrigger>
            </TabsList>
            <TabsContent value="new-assignment">
              <NewAssignmentForm onSubmit={handleNewAssignment} />
            </TabsContent>
            <TabsContent value="review">
              <AssignmentReviewList />
            </TabsContent>
            <TabsContent value="progress">
              <StudentProgressReport />
            </TabsContent>
            <TabsContent value="overview">
              <ClassOverview />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/" passHref>
            <Button variant="outline">חזרה לדף הבית</Button>
          </Link>
          <Button onClick={() => setActiveTab('overview')}>
            <BarChart className="mr-2 h-4 w-4" />
            סקירת כיתה
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