'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import { Loader2 } from 'lucide-react';
import Countdown, { zeroPad } from 'react-countdown';

function RefreshModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Faqat kerakli holatda ko‘rsatish: masalan, session refresh kerak bo‘lsa
    const needsRefresh = localStorage.getItem('needs-refresh');

    if (needsRefresh === 'true') {
      setIsOpen(true);

      // 8 sekunddan keyin sahifani yangilab va flagni tozalab qo‘yamiz
      setTimeout(() => {
        localStorage.removeItem('needs-refresh');
        location.reload();
      }, 8000);
    }
  }, []);

  const renderer = ({ seconds }: { seconds: number }) => (
    <span className='text-center font-space-grotesk text-5xl font-bold'>
      {zeroPad(seconds)}
    </span>
  );

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div className='mt-4 flex items-center justify-center gap-1 text-sm uppercase opacity-70'>
          <Loader2 className='size-4 animate-spin' />
          <span>Checking</span>
        </div>
        <h1 className='text-center font-space-grotesk text-xl font-medium'>
          Please wait while we refresh your data
        </h1>
        <Countdown
          date={Date.now() + 8000}
          renderer={renderer}
        />
      </DialogContent>
    </Dialog>
  );
}

export default RefreshModal;

