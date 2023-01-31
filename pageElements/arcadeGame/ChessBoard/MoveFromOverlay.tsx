import { Square } from 'chess.js';
import clsx from 'clsx';
import { FC } from 'react';
import { useChessGameContext } from '../../../contexts/ChessGameContext';

type MoveFromOverlayProps = {
  x: number;
  y: number;
  square: Square;
};

export const MoveFromOverlay: FC<MoveFromOverlayProps> = ({ x, y, square }) => {
  const { currChessBoard } = useChessGameContext();

  return (
    <div
      className={clsx(
        'absolute h-[47px] w-[47px] cursor-pointer bg-yellow-200 opacity-50',
        currChessBoard.validMoves !== null &&
          currChessBoard.validMoves.some((move) => move === square) &&
          'cursor-pointer'
      )}
      style={{
        left: 24 + x * 47,
        top: y * 47,
      }}
    />
  );
};
