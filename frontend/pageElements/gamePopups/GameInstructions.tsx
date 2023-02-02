import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FC, ReactNode } from "react";
import { useArcadeMachineContext } from "../../contexts/ArcadeMachineContext";
import { GamePopup } from "./GamePopup";

const ButtonVariants: Variants = {
  initial: {
    filter: "brightness(100%)",
    scale: 1,
  },
  tap: {
    filter: "brightness(85%)",
    scale: 0.975,
  },
};

type BoldedTextProps = {
  children: ReactNode;
};

const BoldedText: FC<BoldedTextProps> = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};

export const GameInstructions: FC = () => {
  const { setShowGameInstructions } = useArcadeMachineContext();

  return (
    <GamePopup onClick={() => setShowGameInstructions(false)}>
      <div className="relative mx-auto flex h-[345px] w-full bg-[url(/HowDoesLeelaVsWorldWorkDisplay.svg)] bg-contain bg-no-repeat pl-[30px] pt-[70px] pb-[20px]">
        <div className="overflow-auto pt-[10px] pr-[20px]">
          <p className="text-xl text-off-white">
            "Leela vs The World" is a game of chess - a simple global board
            where an experiment unlike any before is playing out right before
            our eyes.{" "}
            <BoldedText>And you're invited to participate.</BoldedText>
            <br />
            <br />
            <BoldedText>On one side: "Leela"</BoldedText>. She's a highly
            skilled reinforcement learning chess engine based on the popular Lc0
            (link to bad_gyal). Her moves are also verified at each step using
            zero knowledge proofs, so you know it's always her [link to her
            contracts].
            <br />
            <br />
            <BoldedText>On the other side: "The World”</BoldedText>. That's us.
            Each turn, we have x hours to put money behind possible moves. At
            the end of the timer, one will be chosen randomly weighted by the
            amount of $$$ behind the nominated moves.
            <br />
            <br />
            <BoldedText>Here's the twist:</BoldedText> you can bet that either
            "Leela," or "The World" ultimately wins the game. If you're correct,
            you'll get your initial stake back, along with a proportional cut of
            the other side's staked pool. In other words:
            <br />
            <br />
            <BoldedText>- If you bet on "The World:"</BoldedText> you'd vote
            each round for the strongest possible move for the human team, and
            <br />
            <BoldedText>If you bet on "Leela:”</BoldedText> you'd vote for bad
            moves that jeopardize our chance at victory
            <br />
            <br />
            That's right, it's the age old question of whether collective wisdom
            or self- interested infighting wins the day... shall we find out?
          </p>
        </div>
      </div>
    </GamePopup>
  );
};
