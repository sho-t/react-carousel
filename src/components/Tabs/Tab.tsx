import { FC, useContext } from 'react';
import { ContextProps, TabsContext } from '.';
import styled from 'styled-components';

export type TabProps = {
    label: string;
}

export const Tab: FC<TabProps> = props => {
  const { activeTab, setActiveTab } = useContext(TabsContext) as ContextProps;
  return (
      <Button active={activeTab === props.label} onClick={() => setActiveTab(props.label)}>
        {props.children}
      </Button>
  )
}

const Button = styled.button<{active: boolean}>`
  width: 100%;
  text-align: center;
  padding: 10px 0px;
  border-bottom: ${({active}) => active ? "4px solid #59A0D9" : "none"};
`

