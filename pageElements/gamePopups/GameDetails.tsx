import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { FC, MouseEventHandler, useState } from 'react';
import { useArcadeMachineContext } from '../../contexts/ArcadeMachineContext';
import { useBettingContext } from '../../contexts/BettingContext';
import { GamePopup } from './GamePopup';

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

type LeelaWorldButtonProps = {
  buttonImageUrl: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const LeelaWorldButton: FC<LeelaWorldButtonProps> = ({
  buttonImageUrl,
  onClick,
}) => {
  return (
    <motion.button
      variants={ButtonVariants}
      initial="initial"
      whileTap="tap"
      onClick={onClick}
      className="h-[35px] w-[130px]"
    >
      <Image fill src={buttonImageUrl} alt="" />
    </motion.button>
  );
};

export const GameDetails: FC = () => {
  const { setShowGameDetails, setShowGameInstructions } =
    useArcadeMachineContext();
  const { prizePoolAmount } = useBettingContext();

  const [powerAmount, setPowerAmount] = useState('0');

  return (
    <GamePopup onClick={() => setShowGameDetails(false)}>
      <div className="relative mx-auto flex h-[160px] w-full flex-col bg-[url(/CurrentPrizePoolDisplay.svg)] bg-contain bg-no-repeat">
        <div className="ml-[240px] mt-[55px] mr-[30px] flex flex-col text-2xl">
          <div className="flex h-[35px] flex-row items-center border-2 border-off-white px-[15px] text-off-white">
            {prizePoolAmount.toFixed(2)} ETH
          </div>
          <div className="mt-[8px] flex h-[35px] flex-row items-center border-2 border-off-white px-[15px] text-off-white">
            10%
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-[5px] h-[160px] w-full bg-[url(/BuyPowerDisplay.svg)] bg-contain bg-no-repeat">
        <div>
          <input
            value={powerAmount}
            onChange={(e) => setPowerAmount(e.target.value)}
            className="absolute top-[55px] left-[252.5px] h-[35px] w-[130px] border-2 border-off-white bg-transparent px-2 text-2xl text-off-white outline-none"
          />
          <div className="absolute left-[242.5px] top-[100px]">
            <LeelaWorldButton
              buttonImageUrl="/LeelaButton.svg"
              onClick={() => console.log('Leela')}
            />
          </div>
          <div className="absolute left-[417.5px] top-[100px]">
            <LeelaWorldButton
              buttonImageUrl="/WorldButton.svg"
              onClick={() => console.log('World')}
            />
          </div>
        </div>
      </div>
      <motion.button
        variants={ButtonVariants}
        initial="initial"
        whileTap="tap"
        onClick={() => setShowGameInstructions(true)}
        className="relative mx-auto mt-[5px] block h-[70px] w-[370px]"
      >
        <Image fill src="/HowDoesThisWorkButton.svg" alt="" />
      </motion.button>
    </GamePopup>
  );
};
