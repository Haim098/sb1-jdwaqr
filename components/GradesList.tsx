"use client"

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const mockGrades = [
  { id: 1, subject: 'מתמטיקה', assignment: 'מבחן אמצע', grade: 95, maxGrade: 100 },
  { id: 2, subject: 'אנגלית', assignment: 'חיבור', grade: 88, maxGrade: 100 },
  { id: 3, subject: 'היסטוריה', assignment: 'עבודת מחקר', grade: 92, maxGrade: 100 },
  { id: 4, subject: 'פיזיקה', assignment: 'ניסוי מעבדה', grade: 85, maxGrade: 100 },
];

export default function GradesList() {
  const [grades, setGrades] = useState(mockGrades);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">הציונים שלי</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>מקצוע</TableHead>
            <TableHead>מטלה</TableHead>
            <TableHead>ציון</TableHead>
            <TableHead>התקדמות</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell className="font-medium">{grade.subject}</TableCell>
              <TableCell>{grade.assignment}</TableCell>
              <TableCell>{grade.grade}/{grade.maxGrade}</TableCell>
              <TableCell>
                <Progress value={(grade.grade / grade.maxGrade) * 100} className="w-full" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}