import { MouseEventHandler, FC } from 'react';
import { Variants, motion } from 'framer-motion';

const DropdownVariants: Variants = {
  initial: {
    filter: 'brightness(100%)',
    scale: 1,
  },
  tap: {
    filter: 'brightness(85%)',
    scale: 0.975,
  },
};

type RetroDropdownProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const RetroDropdown: FC<RetroDropdownProps> = ({ text, onClick }) => {
  return (
    <motion.button
      variants={DropdownVariants}
      initial="initial"
      whileTap="tap"
      onClick={onClick}
      className="flex h-[30px] w-[105px] bg-[url(/RetroDropdown.svg)] bg-contain bg-no-repeat pl-[10px] pr-[25px] text-left text-xl"
    >
      {text}
    </motion.button>
  );
};
