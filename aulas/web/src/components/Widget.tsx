import {ChatTeardropDots} from 'phosphor-react';

export function Widget() {
    // return <h1><ChatTeardropDots size="49" weight='duotone'/></h1>

    return (
        <button className='bg-violet-500 rounded-full px-3 h-12'>
            <ChatTeardropDots className='w-16 h-16'/>
        </button>
    )
}