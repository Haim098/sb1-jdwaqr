"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Upload, CheckCircle } from 'lucide-react';

export default function AssignmentUploader({ onUploadSuccess }: { onUploadSuccess: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setUploadStatus('uploading');
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setUploadStatus('success');
          onUploadSuccess();
        }
      }, 500);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="assignment">קובץ המטלה</Label>
        <Input id="assignment" type="file" onChange={handleFileChange} />
      </div>
      {uploadStatus === 'uploading' && (
        <Progress value={uploadProgress} className="w-full" />
      )}
      <Button onClick={handleUpload} disabled={!file || uploadStatus === 'uploading'} className="w-full">
        {uploadStatus === 'uploading' ? (
          <>
            <Upload className="mr-2 h-4 w-4 animate-spin" />
            מעלה... {uploadProgress}%
          </>
        ) : uploadStatus === 'success' ? (
          <>
            <CheckCircle className="mr-2 h-4 w-4" />
            הועלה בהצלחה!
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            העלאת מטלה
          </>
        )}
      </Button>
    </div>
  );
}