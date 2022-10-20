import  clsx  from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps{
    children: ReactNode;
    asChild?: boolean;
}



export function Button({children, asChild}: ButtonProps){

    const Comp = asChild ? Slot : 'button'
    return(
        <Comp 
        className={clsx(
            'px-4 py-3 bg-purple-700 rounded font-semibold text-gray-200 text-sm w-full  transition-colors hover:bg-purple-500',)}



        >{children}</Comp>
    ) 
}