import { Chess, Square } from 'chess.js';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import { useChessGameContext } from '../../../contexts/ChessGameContext';

type MoveToOverlayProps = {
  x: number;
  y: number;
  square: Square;
};

export const MoveToOverlay: FC<MoveToOverlayProps> = ({ x, y, square }) => {
  const { currChessBoard } = useChessGameContext();

  if (!currChessBoard.moveFrom) return null;

  // FIXME: stop initializing so many Chess
  const chess = new Chess(currChessBoard.fen);
  const piece = chess.get(currChessBoard.moveFrom);

  if (!piece) return null;

  return (
    <div
      className={clsx(
        'absolute h-[47px] w-[47px] cursor-pointer bg-blue-600 opacity-50',
        currChessBoard.validMoves !== null &&
          currChessBoard.validMoves.some((move) => move === square) &&
          'cursor-pointer'
      )}
      style={{
        left: 24 + x * 47,
        top: y * 47,
      }}
    >
      <div className="relative h-[47px] w-[47px]">
        <Image
          src={`/chessPieces/${piece.type}${piece.color}.svg`}
          alt=""
          fill
          className="object-contain opacity-70"
        />
      </div>
    </div>
  );
};
