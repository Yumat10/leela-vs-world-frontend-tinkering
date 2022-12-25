import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ArcadeMachineContextInterface {
  prizePoolAmount: number;
  setPrizePoolAmount: Dispatch<SetStateAction<number>>;
  MAX_PRIZE_POOL: number;

  showGameDetails: boolean;
  setShowGameDetails: Dispatch<SetStateAction<boolean>>;

  showGameInstructions: boolean;
  setShowGameInstructions: Dispatch<SetStateAction<boolean>>;
}

const ArcadeMachineContext = createContext<
  ArcadeMachineContextInterface | undefined
>(undefined);

const MAX_PRIZE_POOL = 10;

export const ArcadeMachineContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [prizePoolAmount, setPrizePoolAmount] = useState(2);

  const [showGameDetails, setShowGameDetails] = useState(false);
  const [showGameInstructions, setShowGameInstructions] = useState(false);

  useEffect(() => {
    const prizePoolIncrmementor = setInterval(() => {
      setPrizePoolAmount((amount) => (amount >= 10 ? 2 : amount + 0.2));
    }, 500);
    return () => clearInterval(prizePoolIncrmementor);
  }, []);

  return (
    <ArcadeMachineContext.Provider
      value={{
        prizePoolAmount,
        setPrizePoolAmount,
        MAX_PRIZE_POOL,

        showGameDetails,
        setShowGameDetails,
        showGameInstructions,
        setShowGameInstructions,
      }}
    >
      {children}
    </ArcadeMachineContext.Provider>
  );
};

export const useArcadeMachineContext = (): ArcadeMachineContextInterface => {
  const context = useContext(ArcadeMachineContext);
  if (context === undefined) {
    throw new Error(
      'ArcadeMachineContext must be within ArcadeMachineContextProvider'
    );
  }

  return context;
};
