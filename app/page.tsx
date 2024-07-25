"use client";
import { InitialScreen } from "@/components/component/initial-screen";
import { LoadingScreen } from "@/components/component/loading-screen";
import { ScoreScreen } from "@/components/component/score-screen";
import { useState } from 'react';

export default function Page() {
  const [currentScreen, setCurrentScreen] = useState('initial');

  const handleNavigate = (screen) => {
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
        <LoadingScreen
          onNavigateToInitial={() => handleNavigate('initial')}
          onNavigateToScore={() => handleNavigate('score')}
        />
      )}
      {currentScreen === 'score' && <ScoreScreen 
        onNavigateToInitial={() => handleNavigate('initial')}
        onNavigateToLoading={() => handleNavigate('loading')}
      />}
    </>
  );
}

