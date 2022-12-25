import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

type Move = {
  move: string;
  amount: number;
};

export const NextMoveLeaderboard: FC = () => {
  const [nextMoves, setNextMoves] = useState<Move[]>([
    { move: 'Rdf8', amount: 0.2 },
    { move: 'Qh4e1', amount: 0.2 },
    { move: 'Bxe5', amount: 0.2 },
    { move: 'Nf3', amount: 0.2 },
  ]);

  useEffect(() => {
    const bidInterval = setInterval(() => {
      const randomIndex = Math.floor(4 * Math.random());
      setNextMoves((currNextMoves) => {
        currNextMoves[randomIndex].amount += 0.5;
        if (currNextMoves[randomIndex].amount >= 5) {
          const resetNewMoves = currNextMoves.map(({ move }) => ({
            move,
            amount: 0.2,
          }));
          return [...resetNewMoves];
        }
        currNextMoves = currNextMoves
          .sort((moveA, moveB) => moveA.amount - moveB.amount)
          .reverse();
        return [...currNextMoves];
      });
    }, 500);
    return () => clearInterval(bidInterval);
  }, []);

  return (
    <div className="h-36 w-full bg-[url(/NextMoveLeaderboardDisplay.svg)] bg-contain bg-no-repeat px-3 pt-8 pb-4">
      <div className="flex flex-col justify-between">
        {nextMoves.map(({ move, amount }, index) => (
          <div
            key={move}
            className={clsx(
              'flex flex-row justify-between px-2',
              index % 2 === 0 && 'bg-emerald-green'
            )}
          >
            <p className="font-bold">{move}</p>
            <p>{amount.toFixed(2)} ETH</p>
          </div>
        ))}
      </div>
    </div>
  );
};
