import Image from 'next/image';
import { ArcadeHeader } from '../pageElements/arcadeGame/ArcadeHeader';
import { NextMoveLeaderboard } from '../pageElements/arcadeGame/NextMoveLeaderboard';
import { NextMoveTimer } from '../pageElements/arcadeGame/NextMoveTimer';
import { PrizePool } from '../pageElements/arcadeGame/PrizePool';
import { ChessBoard } from '../pageElements/arcadeGame/ChessBoard/ChessBoard';
import { VotingPanel } from '../pageElements/arcadeGame/votingPanel/VotingPanel';
import { useArcadeMachineContext } from '../contexts/ArcadeMachineContext';
import { GameDetails } from '../pageElements/gamePopups/GameDetails';
import { GameInstructions } from '../pageElements/gamePopups/GameInstructions';
import { ArcadeControls } from '../pageElements/arcadeGame/ArcadeControls';
import { CreatedByModulousLabs } from '../pageElements/arcadeGame/CreatedByModulousLabs';
import { useMediaQueryContext } from '../contexts/MediaQueryContext';
import { ScreenTooSmall } from '../pageElements/ScreenTooSmall';

export default function Home() {
  const { isMobile } = useMediaQueryContext();
  const { showGameInstructions, showGameDetails } = useArcadeMachineContext();

  if (isMobile) {
    return <ScreenTooSmall />;
  }

  return (
    <div className="flex h-screen flex-row items-end justify-center bg-off-black">
      <svg className="h-full w-full object-contain" viewBox="0 0 1920 1080">
        <foreignObject width="1920" height="1080" alignmentBaseline="baseline">
          <Image
            priority
            fill
            src="/ArcadeMachine.gif"
            alt="arcade-machine"
            className="z-0 object-contain"
          />
          <div className="-ml-[25px]">
            <div className="mx-auto mt-0 flex h-[230px] w-[1375px]">
              {/* <ArcadeHeader /> */}
            </div>

            <div className="relative mx-auto mt-[65px] grid h-[590px] w-[1025px] grid-cols-2 gap-x-10 px-[30px] py-[30px]">
              {!showGameInstructions && showGameDetails && (
                <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-center bg-black bg-opacity-70">
                  <GameDetails />
                </div>
              )}
              {showGameInstructions && (
                <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-row items-center justify-center bg-black bg-opacity-70">
                  <GameInstructions />
                </div>
              )}

              <div className="col-span-1 flex flex-col justify-between">
                <div className="flex h-[95px]">
                  <NextMoveTimer />
                </div>
                <div className="h-[400px] w-[400px] self-end">
                  <ChessBoard />
                </div>
              </div>
              {/* <div className="col-span-1 flex flex-col">
                <div className="mb-[20px] h-[125px]">
                  <PrizePool />
                </div>
                <div className="flex h-[265px]">
                  <NextMoveLeaderboard />
                </div>
                <div className="flex-grow">
                  <VotingPanel />
                </div>
              </div> */}
            </div>

            {/* <div className="mx-auto mt-[20px] h-[70px] w-[1475px]">
            <CreatedByModulousLabs />
          </div>

          <div className="mx-auto mt-[-90px] h-[220px] w-[1375px]">
            <ArcadeControls />
          </div> */}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
