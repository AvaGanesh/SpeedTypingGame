export const Difficulty = ({
  onDifficultyChange,
}: {
  onDifficultyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <fieldset>
      <legend className='mb-4'>Please select difficulty level</legend>
      <div className='flex items-center justify-start mb-4 w-100 '>
        <input
          type='radio'
          name='level'
          value='EASY'
          id='easy'
          className='w-4 h-4 text-black-600'
          onChange={onDifficultyChange}
        />
        <label htmlFor='easy' className='ml-2 text-sm font-medium text-gray-900'>
          EASY
        </label>
      </div>

      <div className='flex items-center justify-start mb-4 w-100'>
        <input
          type='radio'
          name='level'
          value='MEDIUM'
          id='medium'
          onChange={onDifficultyChange}
          className='w-4 h-4 text-blue-600'
        />
        <label htmlFor='medium' className='ml-2 text-sm font-medium text-gray-900'>
          MEDIUM
        </label>
      </div>

      <div className='flex items-center justify-start mb-4 w-100'>
        <input
          type='radio'
          name='level'
          value='HARD'
          id='hard'
          onChange={onDifficultyChange}
          className='w-4 h-4 text-blue-600'
        />
        <label htmlFor='hard' className='ml-2 text-sm font-medium text-gray-900'>
          HARD
        </label>
      </div>
    </fieldset>
  );
};
