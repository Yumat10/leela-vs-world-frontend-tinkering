import { FC, MouseEventHandler, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import { RetroButton } from './RetroButton';
import { RetroDropdown } from './RetroDropdown';

export const VotingPanel: FC = () => {
  const [playerOption, setPlayerOption] = useState<'Leela' | 'World'>('Leela');

  enum MoveOptions {
    'Rdf8',
    'Qh4e1',
    'Bxe5',
    'Nf3',
  }

  const [moveOptionIndex, setMoveOptionIndex] = useState(0);

  return (
    <div className="relative h-40 w-full bg-[url(/VotingDisplay.svg)] bg-contain bg-no-repeat">
      <div className="absolute left-[5.7rem] top-2">
        <RetroDropdown
          text={playerOption}
          onClick={() => {
            setPlayerOption(playerOption === 'Leela' ? 'World' : 'Leela');
          }}
        />
      </div>
      <div className="absolute right-12 top-2">
        <RetroDropdown
          text={MoveOptions[moveOptionIndex]}
          onClick={() => {
            setMoveOptionIndex((moveOptionIndex + 1) % 4);
          }}
        />
      </div>
      <div className="flex flex-col gap-y-2 pt-16">
        <div className="h-6">
          <RetroButton
            buttonImageUrl="bg-[url(/SubmitMoveButton.svg)]"
            onClick={() => {
              console.log('Submit Move');
            }}
          />
        </div>
        <div className="h-6">
          <RetroButton
            buttonImageUrl="bg-[url(/BuyPowerButton.svg)]"
            onClick={() => {
              console.log('Buy Power');
            }}
          />
        </div>
        <div className="h-6">
          <RetroButton
            buttonImageUrl="bg-[url(/ConnectWalletButton.svg)]"
            onClick={() => {
              console.log('Connect Your Wallet');
            }}
          />
        </div>
      </div>
    </div>
  );
};
