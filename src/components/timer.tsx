import { useState, useEffect, useRef } from 'react';

export const Timer = ({ status, onTimeUp }: { status: 'START' | 'STOP'; onTimeUp: () => void }) => {
  const [time, setTime] = useState(0);
  const maxLimit = 120;

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (status === 'START') {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime < maxLimit - 1) {
            return prevTime + 1;
          } else {
            clearInterval(intervalRef.current!);
            onTimeUp();
            return maxLimit;
          }
        });
      }, 1000);
    } else if (status === 'STOP') {
      clearInterval(intervalRef.current!);
    }

    return () => {
      clearInterval(intervalRef.current!);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, maxLimit]);

  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
      <div
        className='bg-blue-600 h-2.5 rounded-full'
        style={{ width: `${Math.round((time / maxLimit) * 100)}%` }}
      ></div>
    </div>
  );
};
