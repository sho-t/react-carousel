import { FC, useContext } from 'react';
import { CarouselContext, ContextProps } from '.';

export const NextButton: FC = props => {
  const { setNext, isLast } = useContext(CarouselContext) as ContextProps;
  return (
      <button onClick={setNext} disabled={isLast}>
        {props.children}
      </button>
  )
}
