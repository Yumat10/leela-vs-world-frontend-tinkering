import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { ChessBoardData, ChessPiece } from '../../../types/ChessBoard.type';
import { BOARD_0, BOARD_1 } from './ChessBoardDefaults';
import { ChessPieceOnBoard } from './ChessPieceOnBoard';

const ButtonVariants: Variants = {
  initial: {
    filter: 'brightness(100%)',
    scale: 1,
  },
  tap: {
    filter: 'brightness(85%)',
    scale: 0.975,
  },
};

type MoveButtonProps = {
  disabled: boolean;
  buttonImageUrl: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const MoveButton: FC<MoveButtonProps> = ({
  buttonImageUrl,
  onClick,
  disabled,
}) => {
  return (
    <motion.button
      variants={ButtonVariants}
      initial="initial"
      whileTap="tap"
      disabled={disabled}
      className="relative h-7 w-28 disabled:opacity-50"
      onClick={onClick}
    >
      <Image priority fill src={buttonImageUrl} alt="Left" />
    </motion.button>
  );
};

export const ChessBoard: FC = () => {
  const [currChessBoard, setCurrChessBoard] = useState<ChessBoardData>(BOARD_0);
  const prevChessBoards: ChessBoardData[] = [BOARD_1];

  const [selectedChessBoard, setSelectedChessBoard] =
    useState<ChessBoardData>(currChessBoard);

  const [turnNum, setTurnNum] = useState(0);

  useEffect(() => {
    // 8 - 15 B_PAWN
    // 24 - 31 W_PAWN
    const movePawnInterval = setInterval(() => {
      let chessPieceNum = Math.floor(turnNum % 16);
      if (chessPieceNum % 2 === 0) {
        chessPieceNum = chessPieceNum / 2 + 8;
      } else {
        chessPieceNum = (chessPieceNum - 1) / 2 + 24;
      }
      const newCurrChessBoard = currChessBoard;
      const chosenChessPiece = newCurrChessBoard[chessPieceNum as ChessPiece];
      switch (chosenChessPiece.row) {
        case 2:
          chosenChessPiece.row = 3;
          break;
        case 3:
          chosenChessPiece.row = 2;
          break;
        case 6:
          chosenChessPiece.row = 7;
          break;
        case 7:
          chosenChessPiece.row = 6;
          break;
      }
      newCurrChessBoard[chessPieceNum as ChessPiece] = chosenChessPiece;
      setCurrChessBoard({ ...newCurrChessBoard });
      setTurnNum(turnNum + 1);
    }, 500);

    return () => clearInterval(movePawnInterval);
  });

  return (
    <div className="pr-[3.8rem]">
      <div className="grid-col-8 grid h-[17rem] w-full grid-rows-8 bg-[url(/ChessBoard.svg)] bg-contain bg-no-repeat pl-4 pb-4">
        {Object.keys(selectedChessBoard).map((chessPieceKey) => {
          const chessPiece = Number(chessPieceKey) as ChessPiece;
          const { row, column } = selectedChessBoard[chessPiece];
          return (
            <ChessPieceOnBoard
              key={chessPieceKey}
              chessPiece={chessPiece}
              row={row}
              column={column}
            />
          );
        })}
      </div>
      <div className="mt-1 flex flex-row items-center justify-between">
        <div>
          <MoveButton
            disabled={selectedChessBoard === BOARD_1}
            buttonImageUrl="/LeftArrowGreen.svg"
            onClick={() => {
              setSelectedChessBoard(BOARD_1);
            }}
          />
        </div>
        <div className="relative h-5 w-5">
          <Image priority fill src="/DotPinkGreen.svg" alt="" />
        </div>
        <div>
          <MoveButton
            disabled={selectedChessBoard !== BOARD_1}
            buttonImageUrl="/RightArrowPink.svg"
            onClick={() => {
              setSelectedChessBoard(currChessBoard);
            }}
          />
        </div>
      </div>
    </div>
  );
};
