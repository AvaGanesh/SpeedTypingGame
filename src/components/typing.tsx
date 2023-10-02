import { RefObject } from 'react';

export const Typing = ({
  onUserTyping,
  typingDisabled,
  inputRef,
}: {
  onUserTyping: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  typingDisabled: boolean;
  inputRef: RefObject<HTMLTextAreaElement>;
}) => {
  const rows = 4;

  return (
    <div className='mt-2 pt-2'>
      <textarea
        id='message'
        ref={inputRef}
        rows={rows}
        disabled={typingDisabled}
        onChange={onUserTyping}
        className='block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
        placeholder='Start typing..'
      ></textarea>
    </div>
  );
};
