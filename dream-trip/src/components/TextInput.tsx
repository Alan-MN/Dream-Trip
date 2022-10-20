import  clsx  from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
}

export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
    return(
    <div className=' flex items-center gap-3 py-3 px-3 rounded w-full bg-gray-800  focus-within:ring-2 ring-purple-700'>
        {props.children}
    </div>
    )
}

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return(
        <Slot classname = 'w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInputIcon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{
}

function TextInputInput(props: TextInputInputProps){

    return(
        
        <input 
        className= ' outline-none bg-transparent flex-1 text-gray-200 text-sm placeholder:text-gray-400'
            {...props}
        ></input>
    ) 
}


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}

