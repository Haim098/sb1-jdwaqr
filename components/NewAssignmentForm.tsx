"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NewAssignmentForm({ onSubmit }: { onSubmit: () => void }) {
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    subject: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New assignment:', assignment);
    onSubmit();
    setAssignment({ title: '', description: '', dueDate: '', subject: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">כותרת המטלה</Label>
        <Input
          id="title"
          value={assignment.title}
          onChange={(e) => setAssignment({...assignment, title: e.target.value})}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">תיאור המטלה</Label>
        <Textarea
          id="description"
          value={assignment.description}
          onChange={(e) => setAssignment({...assignment, description: e.target.value})}
          required
        />
      </div>
      <div>
        <Label htmlFor="subject">מקצוע</Label>
        <Select onValueChange={(value) => setAssignment({...assignment, subject: value})}>
          <SelectTrigger>
            <SelectValue placeholder="בחר מקצוע" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="math">מתמטיקה</SelectItem>
            <SelectItem value="english">אנגלית</SelectItem>
            <SelectItem value="science">מדעים</SelectItem>
            <SelectItem value="history">היסטוריה</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="dueDate">תאריך הגשה</Label>
        <Input
          id="dueDate"
          type="date"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({...assignment, dueDate: e.target.value})}
          required
        />
      </div>
      <Button type="submit" className="w-full">צור מטלה חדשה</Button>
    </form>
  );
}