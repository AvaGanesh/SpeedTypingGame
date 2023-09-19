export type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';

export interface TypingText {
  level: DifficultyLevel;
  text: string;
}
