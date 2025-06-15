
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { cn } from "@/lib/utils";

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const timeSlots = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`); // 8am to 7pm

const events = [
  { day: 'Lundi', time: '10:00', duration: 2, title: 'Conduite - Alice M.', type: 'conduite' },
  { day: 'Mardi', time: '14:00', duration: 1, title: 'Conduite - Bob D.', type: 'conduite' },
  { day: 'Mercredi', time: '09:00', duration: 2, title: 'Conduite - Charlie D.', type: 'conduite' },
  { day: 'Mercredi', time: '18:00', duration: 2, title: 'Cours de code', type: 'code' },
  { day: 'Vendredi', time: '11:00', duration: 1, title: 'Conduite - Diana P.', type: 'conduite' },
  { day: 'Samedi', time: '15:00', duration: 2, title: 'Examen - Eve P.', type: 'examen' },
];

const getEventTypeClass = (type: string) => {
    switch (type) {
        case 'conduite': return 'bg-blue-100 border-blue-300 text-blue-800';
        case 'code': return 'bg-purple-100 border-purple-300 text-purple-800';
        case 'examen': return 'bg-green-100 border-green-300 text-green-800';
        default: return 'bg-gray-100 border-gray-300';
    }
}

const ResponsablePlanning = () => {
  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Planning de l'Auto-École</h1>
          <p className="text-gray-600">Visualisez et organisez le planning des cours et des formateurs.</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h3 className="text-lg font-semibold text-center">15 - 21 Juin, 2025</h3>
                    <Button variant="outline" size="icon">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Planifier
                </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            <div className="grid" style={{ gridTemplateColumns: "auto repeat(7, minmax(120px, 1fr))" }}>
                {/* Header */}
                <div className="sticky left-0 bg-white z-10"></div>
                {days.map(day => (
                    <div key={day} className="text-center py-2 border-b font-medium text-sm border-l">
                        {day}
                    </div>
                ))}
                
                {/* Body */}
                {timeSlots.map(time => (
                    <React.Fragment key={time}>
                        <div className="sticky left-0 bg-white z-10 flex items-center justify-center text-xs text-gray-500 border-b border-r px-2 h-20">
                           {time}
                        </div>
                        {days.map(day => (
                            <div key={`${day}-${time}`} className="border-b border-l h-20 relative">
                                {events.filter(e => e.day === day && e.time === time).map(event => {
                                    const height = event.duration * 5; // 5rem (h-20) per hour
                                    return (
                                        <div 
                                            key={event.title}
                                            className={cn("absolute w-[98%] left-[1%] p-2 rounded-md border text-xs overflow-hidden z-20", getEventTypeClass(event.type))}
                                            style={{ height: `calc(${height}rem - 4px)` }}
                                        >
                                            <p className="font-semibold truncate">{event.title}</p>
                                            <p className="truncate">{event.time} - {parseInt(event.time.split(':')[0]) + event.duration}:00</p>
                                        </div>
                                    )
                                })}
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ResponsablePlanning;
