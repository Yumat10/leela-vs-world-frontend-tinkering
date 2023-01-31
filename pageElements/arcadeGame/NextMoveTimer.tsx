import moment from 'moment';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useBettingContext } from '../../contexts/BettingContext';

export const NextMoveTimer: FC = () => {
  const { timeToNextMove, prevMove } = useBettingContext();

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
    <div className="relative grid h-full w-full grid-cols-12 items-center bg-[url(/NextMoveTimer.svg)] bg-contain bg-no-repeat px-[32.5px] pt-[42.5px] pb-[20px] text-3xl">
      <p className="col-span-5 w-fit">{prevMove}</p>
      <p className="col-span-7 w-fit pl-[20px]">{formattedTimeToNextMove()}</p>
    </div>
  );
};
