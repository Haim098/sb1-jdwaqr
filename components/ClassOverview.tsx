"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockClasses = [
  { id: 1, name: 'כיתה י\' 1' },
  { id: 2, name: 'כיתה י\' 2' },
  { id: 3, name: 'כיתה י"א 1' },
];

const mockData = [
  { subject: 'מתמטיקה', averageGrade: 85 },
  { subject: 'אנגלית', averageGrade: 78 },
  { subject: 'מדעים', averageGrade: 92 },
  { subject: 'היסטוריה', averageGrade: 88 },
];

export default function ClassOverview() {
  const [selectedClass, setSelectedClass] = useState(mockClasses[0]);

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="class-select" className="block text-sm font-medium text-gray-700 mb-1">בחר כיתה</label>
        <Select onValueChange={(value) => setSelectedClass(mockClasses.find(c => c.id.toString() === value) || mockClasses[0])}>
          <SelectTrigger>
            <SelectValue placeholder="בחר כיתה" />
          </SelectTrigger>
          <SelectContent>
            {mockClasses.map((cls) => (
              <SelectItem key={cls.id} value={cls.id.toString()}>{cls.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>סקירת ציונים - {selectedClass.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="averageGrade" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>סטטיסטיקות כיתה</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>מספר תלמידים: 30</li>
              <li>ממוצע כיתתי: 85.75</li>
              <li>אחוז הצלחה במבחנים: 92%</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>מטלות קרובות</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>מבחן במתמטיקה - 20/06/2023</li>
              <li>הגשת פרויקט מדעים - 25/06/2023</li>
              <li>בוחן באנגלית - 30/06/2023</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}