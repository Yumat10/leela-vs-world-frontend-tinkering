import { Variants, motion } from 'framer-motion';
import Image from 'next/image';
import { FC, MouseEventHandler, ReactNode } from 'react';
import { useArcadeMachineContext } from '../../contexts/ArcadeMachineContext';

const BackgroundVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const ButtonVariants: Variants = {
  initial: {
    filter: 'brightness(100%)',
    scale: 1,
  },
  tap: {
    filter: 'brightness(85%)',
    scale: 0.9,
  },
};

type GamePopupProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const GamePopup: FC<GamePopupProps> = ({ children, onClick }) => {
  return (
    <motion.div
      variants={BackgroundVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="relative h-[455px] w-[800px] bg-[url(/ChessBoardBackground.svg)] bg-contain bg-no-repeat pt-[30px]"
    >
      <div className="absolute right-[10px] top-[10px]">
        <motion.button
          variants={ButtonVariants}
          initial="initial"
          whileTap="tap"
          className="relative h-[40px] w-[40px]"
          onClick={onClick}
        >
          <Image
            fill
            src="/XButtonPink.svg"
            alt="X"
            className="object-contain"
          />
        </motion.button>
      </div>
      <div className="mx-[75px]">{children}</div>
    </motion.div>
  );
};
