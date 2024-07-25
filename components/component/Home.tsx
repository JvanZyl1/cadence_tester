import { useState } from "react";
import InitialScreen from "@/components/component/initial-screen";
import LoadingScreen from "@/components/component/loading-screen";
import ScoreScreen from "@/components/component/score-screen"; // Assuming you also have a ScoreScreen component

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState('initial');

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <>
      {currentScreen === 'initial' && <InitialScreen onNavigate={() => handleNavigate('loading')} />}
      {currentScreen === 'loading' && <LoadingScreen onNavigate={() => handleNavigate('score')} />}
      {currentScreen === 'score' && <ScoreScreen />}
    </>
  );
}