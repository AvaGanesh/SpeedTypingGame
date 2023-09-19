import { useEffect, useState } from 'react';
import { DifficultyLevel, TypingText } from '../models/typing-text.model';

export const Paragraph = ({ difficultLevel }: { difficultLevel: DifficultyLevel | undefined }) => {
  const [paragraph, setParagraph] = useState('');

  useEffect(() => {
    fetch('/text.json')
      .then((response) => response.json())
      .then((res: TypingText[]) => {
        setParagraph(res.find((typingText) => typingText.level === difficultLevel)?.text ?? '');
      });
  }, [difficultLevel]);

  return (
    <>
      <p>{paragraph}</p>
    </>
  );
};
