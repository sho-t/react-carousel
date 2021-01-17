
import { useContext, ReactElement } from 'react';
import { CarouselContext, ContextProps } from '.';

export type ContentProps = {
  index: number
  children: ReactElement
}

function Content({ index, children }: ContentProps) {
  const { currentIndex } = useContext(CarouselContext) as ContextProps;
  return currentIndex === index ? children : null
}

export { Content }