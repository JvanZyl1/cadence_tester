import React, { useState } from 'react';
import { InitialScreen } from "@/components/component/initial-screen";
import { LoadingScreen } from "@/components/component/loading-screen";
import { ScoreScreen } from "@/components/component/score-screen";

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState<string>('initial');  // Explicitly set the state type to string

  // Specify the type of 'screen' as string
  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <>
      {currentScreen === 'initial' && (
        <InitialScreen
          onNavigateToLoading={() => handleNavigate('loading')}
          onNavigateToScore={() => handleNavigate('score')}
        />
      )}
      {currentScreen === 'loading' && (
        <LoadingScreen onNavigate={() => handleNavigate('score')} />
      )}
      {currentScreen === 'score' && <ScoreScreen />}
    </>
  );
}