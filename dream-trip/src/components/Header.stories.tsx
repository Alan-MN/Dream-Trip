import { Meta, StoryObj } from '@storybook/react'
import { Header , HeaderProps } from "./Header";


export default {
    title: 'Components/Header',
    component: Header,
    args: {
        children: 'lorem ipsum',
        size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeaderProps>


export const Default: StoryObj<HeaderProps> = {}

export const Large: StoryObj<HeaderProps> = {
    args: {
        size: 'lg',
    }
}


export const Small: StoryObj<HeaderProps> = {
    args: {
        size: 'sm',
    }
}

export const CustomComponent: StoryObj<HeaderProps> = {
    args: {
        asChild: true,
        children: (
            <h1>tes tando</h1>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true
            }           
        },
        asChild:{
            table:{
                disable: true
            } 
        }
    }
}
