import { useEffect, useMemo, useState } from 'react';
import { DifficultyLevel, TypingText } from '../models/typing-text.model';

export const Paragraph = ({
  difficultLevel,
  userInput,
}: {
  difficultLevel: DifficultyLevel | undefined;
  userInput: string;
}) => {
  const [paragraph, setParagraph] = useState('');
  const validSentence = useMemo(() => paragraph.slice(0, userInput.length), [paragraph, userInput]);

  useEffect(() => {
    fetch('/text.json')
      .then((response) => response.json())
      .then((res: TypingText[]) => {
        setParagraph(res.find((typingText) => typingText.level === difficultLevel)?.text ?? '');
      });
  }, [difficultLevel]);

  const differences = useMemo(() => {
    const newDifferences = [];
    for (let i = 0; i < validSentence.length; i++) {
      newDifferences.push({
        character: validSentence[i],
        index: i,
        isValid: validSentence[i] === userInput[i],
      });
    }
    return newDifferences;
  }, [validSentence, userInput]);

  return (
    <div>
      {differences.map((item, index) => (
        <span key={index} className={item.isValid ? 'text-green-700' : 'text-white bg-red-700'}>
          {item.character}
        </span>
      ))}

      {paragraph.slice(userInput.length, -1)}
    </div>
  );
};
