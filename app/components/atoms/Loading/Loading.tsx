import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className='flex space-x-2 justify-center mt-32 h-screen dark:invert'>
            <span className='sr-only'>Loading...</span>
            <div className='h-8 w-8 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.45s]'></div>
            <div className='h-8 w-8 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
            <div className='h-8 w-8 bg-purple-600 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
            <div className='h-8 w-8 bg-purple-600 rounded-full animate-bounce'></div>
        </div>
    );
};

export default Loading;
