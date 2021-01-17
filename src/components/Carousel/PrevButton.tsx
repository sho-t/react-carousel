import { FC, useContext } from 'react';
import { CarouselContext, ContextProps } from '.';

export const PrevButton: FC = props => {
  const { setPrev, isFirst } = useContext(CarouselContext) as ContextProps;
  return (
      <button onClick={setPrev} disabled={isFirst}>
        {props.children}
      </button>
  )
}
