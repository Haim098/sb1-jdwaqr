"use client"

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Eye } from 'lucide-react';

const mockAssignments = [
  { id: 1, name: 'שיעורי בית במתמטיקה - פרק 5', dueDate: '2023-06-15', status: 'הוגש' },
  { id: 2, name: 'פרויקט מדעים - מערכת השמש', dueDate: '2023-06-20', status: 'בהמתנה' },
  { id: 3, name: 'חיבור באנגלית - החופשה שלי', dueDate: '2023-06-18', status: 'לא הוגש' },
];

export default function AssignmentList() {
  const [assignments, setAssignments] = useState(mockAssignments);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'הוגש': return 'bg-green-500';
      case 'בהמתנה': return 'bg-yellow-500';
      case 'לא הוגש': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">המטלות שלי</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>שם המטלה</TableHead>
            <TableHead>תאריך הגשה</TableHead>
            <TableHead>סטטוס</TableHead>
            <TableHead>פעולות</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell className="font-medium">{assignment.name}</TableCell>
              <TableCell>{assignment.dueDate}</TableCell>
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
                    <Download className="h-4 w-4 mr-1" />
                    הורד
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