import moment from 'moment';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

export const NextMoveTimer: FC = () => {
  const [timeToNextMove, setTimeToNextMove] = useState(60 * 10); // seconds

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeToNextMove((time) => (time - 1 > 0 ? time - 1 : 60 * 10));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  const formattedTimeToNextMove = (): string => {
    if (timeToNextMove > 60) {
      return (
        Math.floor(timeToNextMove / 60) + 'min ' + (timeToNextMove % 60) + 'sec'
      );
    } else {
      return (timeToNextMove % 60) + 'sec';
    }
  };

  return (
    <div className="relative grid h-full w-full grid-cols-2 bg-[url(/NextMoveTimer.svg)] bg-contain bg-no-repeat pt-8 text-xl">
      <p className="col-span-1 ml-7 w-fit">Nc6</p>
      <p className="col-span-1 w-fit">{formattedTimeToNextMove()}</p>
    </div>
  );
};
