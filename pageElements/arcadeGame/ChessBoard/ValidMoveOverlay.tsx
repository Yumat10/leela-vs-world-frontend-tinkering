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
        left: 25 + x * 50,
        top: y * 50,
      }}
    >
      <div className="relative h-[50px] w-[50px]">
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
