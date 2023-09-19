export const Typing = ({
  onUserTyping,
}: {
  onUserTyping: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const rows = 4;
  return (
    <div className='mt-2 pt-2'>
      <textarea
        id='message'
        rows={rows}
        onChange={onUserTyping}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Start typing..'
      ></textarea>
    </div>
  );
};
