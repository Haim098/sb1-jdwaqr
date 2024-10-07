"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Upload, CheckCircle } from 'lucide-react';
import { cn } from "@/lib/utils"

export default function MainContent() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setUploadStatus('uploading');
      // Simulating upload process
      setTimeout(() => {
        setUploadStatus('success');
        setFile(null);
      }, 2000);
    }
  };

  return (
    <main className="container mx-auto p-4 school-bg min-h-screen">
      <Card className={cn("w-full max-w-4xl mx-auto mt-8 glass-effect")}>
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">School Assignment Upload</CardTitle>
          <CardDescription className="text-center text-lg">Upload your assignments for your teacher to review</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upload">Upload Assignment</TabsTrigger>
              <TabsTrigger value="view">View Assignments</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <div className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="assignment">Assignment File</Label>
                  <Input id="assignment" type="file" onChange={handleFileChange} />
                </div>
                <Button onClick={handleUpload} disabled={!file || uploadStatus === 'uploading'}>
                  {uploadStatus === 'uploading' ? (
                    <>
                      <Upload className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : uploadStatus === 'success' ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Uploaded Successfully!
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Assignment
                    </>
                  )}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="view">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Your Uploaded Assignments</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Math Homework - Chapter 5</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Science Project - Solar System</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span>English Essay - My Summer Vacation</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">Need help? Contact your teacher or the IT support team.</p>
        </CardFooter>
      </Card>
    </main>
  );
}