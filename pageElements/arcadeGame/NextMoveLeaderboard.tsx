import clsx from 'clsx';
import { ethers } from 'ethers';
import { FC, useEffect, useState } from 'react';
import { useBettingContext } from '../../contexts/BettingContext';

type Move = {
  move: string;
  amount: number;
};

export const NextMoveLeaderboard: FC = () => {
  const { validMoves } = useBettingContext();

  if (validMoves.length === 0) return null;

  return (
    <div className="h-full w-full bg-[url(/NextMoveLeaderboardDisplay.svg)] bg-contain bg-no-repeat px-[14px] pt-[47.5px] pb-[13px]">
      <div className="h-full overflow-y-scroll">
        {validMoves.map(({ move, amount }, index) => (
          <div
            key={move}
            className={clsx(
              'flex h-[25%] flex-row items-center justify-between px-[15px] text-xl',
              index % 2 === 0 && 'bg-emerald-green'
            )}
          >
            <p>{move}</p>
            <p>{ethers.utils.formatEther(amount)} ETH</p>
          </div>
        ))}
      </div>
    </div>
  );
};
