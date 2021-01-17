
import { useState, useEffect, createContext, FC } from 'react';
import { Content, ContentProps } from './Content';
import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';

export type ContextProps = {
  currentIndex: number;
  setNext: () => void
  setPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export const CarouselContext = createContext<ContextProps | undefined>(undefined)

type Props = {
  totalContents: number
}

type CarouselComposition = {
  Content: FC<ContentProps>
  PrevButton: FC
  NextButton: FC
}

const Carousel: React.FC<Props> & CarouselComposition = ({ totalContents, ...props }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ isFirst, setIsFirst ] = useState(false);
    const [ isLast, setIsLast ] = useState(false);

    const setNext = () => {
        setCurrentIndex(prev => prev + 1)
    }

    const setPrev = () => {
        setCurrentIndex(prev => prev - 1)
    }

    useEffect(() => {
        if (currentIndex === 0) {
            setIsFirst(true)
        } else if (currentIndex === totalContents - 1) {
            setIsLast(true)
        } else {
            setIsFirst(false)
            setIsLast(false)
        }
    }, [currentIndex, totalContents]);   

    return (
        <CarouselContext.Provider value={{currentIndex, setPrev, setNext, isFirst, isLast}}>
            {props.children}
        </CarouselContext.Provider>
    )
}

Carousel.Content = Content
Carousel.PrevButton = PrevButton
Carousel.NextButton = NextButton

export { Carousel };
