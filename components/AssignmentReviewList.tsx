"use client"

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, CheckCircle } from 'lucide-react';

const mockAssignments = [
  { id: 1, studentName: 'דן כהן', assignmentName: 'שיעורי בית במתמטיקה - פרק 5', submissionDate: '2023-06-15', status: 'נבדק' },
  { id: 2, studentName: 'רונה לוי', assignmentName: 'פרויקט מדעים - מערכת השמש', submissionDate: '2023-06-16', status: 'נבדק חלקית' },
  { id: 3, studentName: 'יוסי אברהם', assignmentName: 'חיבור באנגלית - החופשה שלי', submissionDate: '2023-06-17', status: 'ממתין לבדיקה' },
];

export default function AssignmentReviewList() {
  const [assignments, setAssignments] = useState(mockAssignments);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ממתין לבדיקה': return 'bg-yellow-500';
      case 'נבדק חלקית': return 'bg-blue-500';
      case 'נבדק': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">מטלות לבדיקה</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>שם התלמיד</TableHead>
            <TableHead>שם המטלה</TableHead>
            <TableHead>תאריך הגשה</TableHead>
            <TableHead>סטטוס</TableHead>
            <TableHead>פעולות</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell className="font-medium">{assignment.studentName}</TableCell>
              <TableCell>{assignment.assignmentName}</TableCell>
              <TableCell>{assignment.submissionDate}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(assignment.status)}>{assignment.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    צפה
                  </Button>
                  <Button size="sm" variant="outline">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    סמן כנבדק
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}