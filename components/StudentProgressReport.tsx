"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const mockStudents = [
  { id: 1, name: 'דן כהן', overallProgress: 85 },
  { id: 2, name: 'רונה לוי', overallProgress: 92 },
  { id: 3, name: 'יוסי אברהם', overallProgress: 78 },
];

const mockSubjects = ['מתמטיקה', 'אנגלית', 'מדעים', 'היסטוריה'];

export default function StudentProgressReport() {
  const [selectedStudent, setSelectedStudent] = useState(mockStudents[0]);

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="student-select" className="block text-sm font-medium text-gray-700 mb-1">בחר תלמיד</label>
        <Select onValueChange={(value) => setSelectedStudent(mockStudents.find(s => s.id.toString() === value) || mockStudents[0])}>
          <SelectTrigger>
            <SelectValue placeholder="בחר תלמיד" />
          </SelectTrigger>
          <SelectContent>
            {mockStudents.map((student) => (
              <SelectItem key={student.id} value={student.id.toString()}>{student.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>התקדמות כללית - {selectedStudent.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={selectedStudent.overallProgress} className="w-full" />
          <p className="text-center mt-2">{selectedStudent.overallProgress}%</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockSubjects.map((subject, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{subject}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={Math.random() * 100} className="w-full" />
              <p className="text-center mt-2">{Math.round(Math.random() * 100)}%</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}