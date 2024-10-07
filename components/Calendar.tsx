"use client"

import { useState } from 'react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  { date: new Date(2023, 5, 15), title: 'הגשת שיעורי בית במתמטיקה' },
  { date: new Date(2023, 5, 20), title: 'מבחן באנגלית' },
  { date: new Date(2023, 5, 25), title: 'הצגת פרויקט מדעים' },
];

export default function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const getDayContent = (day: Date) => {
    const event = events.find(e => e.date.toDateString() === day.toDateString());
    return event ? (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
    ) : null;
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>לוח אירועים</CardTitle>
        </CardHeader>
        <CardContent>
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            components={{
              DayContent: ({ date }) => getDayContent(date),
            }}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>אירועים קרובים</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {events.map((event, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{event.title}</span>
                <span className="text-sm text-muted-foreground">
                  {event.date.toLocaleDateString('he-IL')}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}