"use client"

import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell, Menu, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import Toast from '@/components/Toast';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast, showToast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const showNotification = () => {
    showToast({
      title: "התראות חדשות",
      description: "יש לך 3 הודעות חדשות ו-2 מטלות לביצוע",
      duration: 5000,
    });
  };

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">מערכת בית הספר</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/student-dashboard" className="hover:text-secondary-foreground transition-colors">אזור תלמידים</Link>
          <Link href="/teacher-dashboard" className="hover:text-secondary-foreground transition-colors">אזור מורים</Link>
          <Link href="/support" className="hover:text-secondary-foreground transition-colors">תמיכה</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={showNotification}>
            <Bell className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="/avatar.png" alt="תמונת משתמש" />
                <AvatarFallback>משתמש</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>החשבון שלי</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>פרופיל</DropdownMenuItem>
              <DropdownMenuItem>הגדרות</DropdownMenuItem>
              <DropdownMenuItem>התנתק</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-secondary p-4">
          <Link href="/student-dashboard" className="block py-2 hover:text-primary-foreground transition-colors">אזור תלמידים</Link>
          <Link href="/teacher-dashboard" className="block py-2 hover:text-primary-foreground transition-colors">אזור מורים</Link>
          <Link href="/support" className="block py-2 hover:text-primary-foreground transition-colors">תמיכה</Link>
        </nav>
      )}
      {toast && (
        <Toast
          title={toast.title}
          description={toast.description}
          duration={toast.duration}
          onClose={() => {}}
        />
      )}
    </header>
  );
}