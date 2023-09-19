import { useState } from 'react';
import './App.css';
import { Paragraph } from './components/parapraph';
import { DifficultyLevel } from './models/typing-text.model';
import { Difficulty } from './components/difficulty';
import { Typing } from './components/typing';

function App() {
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel | undefined>(undefined);
  const [userInputText, setUserInputText] = useState('');

  const onDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDifficultyLevel(event.target.value as DifficultyLevel);
    setUserInputText('');
  };

  const onUserTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInputText(event.target.value);
  };

  return (
    <>
      <Difficulty onDifficultyChange={onDifficultyChange} />
      <Paragraph difficultLevel={difficultyLevel} userInput={userInputText} />
      <Typing onUserTyping={onUserTyping} />
    </>
  );
}

export default App;
