import { useState, useCallback } from 'react';

type ToastType = {
  title: string;
  description: string;
  duration?: number;
};

export const useToast = () => {
  const [toast, setToast] = useState<ToastType | null>(null);

  const showToast = useCallback(({ title, description, duration = 3000 }: ToastType) => {
    setToast({ title, description, duration });
    setTimeout(() => {
      setToast(null);
    }, duration);
  }, []);

  return { toast, showToast };
};