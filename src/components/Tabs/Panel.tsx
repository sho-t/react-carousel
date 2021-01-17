import { FC, useContext } from 'react';
import { ContextProps, TabsContext } from '.';

export type PanelProps = {
  label: string
}

export const Panel: FC<PanelProps> = props => {
  const { activeTab } = useContext(TabsContext) as ContextProps;
  return activeTab === props.label ? <div>{props.children}</div> : null
}