import { Chess, Square } from 'chess.js';
import Image from 'next/image';
import { FC } from 'react';
import { useChessGameContext } from '../../../contexts/ChessGameContext';

type ValidMoveOverlayProps = {
  x: number;
  y: number;
  square: Square;
};

export const ValidMoveOverlay: FC<ValidMoveOverlayProps> = ({
  x,
  y,
  square,
}) => {
  const { currChessBoard } = useChessGameContext();

  if (
    currChessBoard.validMoves === null ||
    !currChessBoard.validMoves.some((move) => move === square)
  )
    return null;

  // FIXME: stop initializing so many Chess
  const chess = new Chess(currChessBoard.fen);
  const piece = chess.get(currChessBoard.moveFrom);

  if (!piece) return null;

  return (
    <div
      className="absolute cursor-pointer"
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
          className="object-contain opacity-30"
        />
      </div>
    </div>
  );
};
