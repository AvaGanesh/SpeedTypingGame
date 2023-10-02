import { useRef, useState } from 'react';
import './App.css';
import { Paragraph } from './components/paragraph';
import { DifficultyLevel } from './models/typing-text.model';
import { Difficulty } from './components/difficulty';
import { Typing } from './components/typing';
import { Timer } from './components/timer';

function App() {
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel | undefined>(undefined);
  const [userInputText, setUserInputText] = useState('');
  const [timerStatus, setTimerStatus] = useState<'START' | 'STOP'>('STOP');
  const [showResults, setShowResults] = useState(false);
  const [WPM, setWPM] = useState(0);

  const paragraphInputRef = useRef<HTMLTextAreaElement>(null);

  const onDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDifficultyLevel(event.target.value as DifficultyLevel);
    setUserInputText('');
  };

  const onUserTyping = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInputText(event.target.value);
  };

  const resetStatus = () => {
    if (timerStatus === 'START') {
      setShowResults(false);
      setDifficultyLevel(undefined);
      setTimerStatus('STOP');
    } else {
      setTimerStatus('START');
    }
  };

  const handleTimeUp = () => {
    calculateWPM();
    setShowResults(true);
  };

  const calculateWPM = () => {
    const totalWords = paragraphInputRef.current?.value.split(' ');
    const wpm = (totalWords?.length ?? 0) / 2;
    setWPM(wpm);
    setDifficultyLevel(undefined);
    setUserInputText('');
  };

  return (
    <>
      <div className='w-100'>
        {timerStatus === 'START' && <Timer status={timerStatus} onTimeUp={handleTimeUp} />}
      </div>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-center mt-2'>
          <h1 className='mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl'>
            Speed typing test
          </h1>
        </div>

        <div className='p-6 bg-white border border-gray-200 rounded-lg'>
          <div className='flex flex-row justify-center'>
            {difficultyLevel === undefined && !showResults && (
              <Difficulty onDifficultyChange={onDifficultyChange} />
            )}
          </div>

          <div className='flex flex-row justify-center'>
            {difficultyLevel && (
              <Paragraph difficultLevel={difficultyLevel} userInput={userInputText} />
            )}
          </div>

          {difficultyLevel && (
            <Typing
              onUserTyping={onUserTyping}
              typingDisabled={timerStatus === 'STOP' || difficultyLevel === undefined}
              inputRef={paragraphInputRef}
            />
          )}

          {showResults && (
            <div className='flex flex-row justify-center'>
              <h4>Words per minute: {WPM}</h4>
            </div>
          )}

          <div className='flex flex-row justify-center'>
            <button
              disabled={difficultyLevel === undefined}
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-2'
              onClick={resetStatus}
            >
              {timerStatus === 'STOP' ? 'Start' : 'Restart'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
