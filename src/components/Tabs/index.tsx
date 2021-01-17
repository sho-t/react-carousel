import { useState, createContext } from 'react';
import { Panel, PanelProps } from './Panel';
import { Tab, TabProps } from './Tab';

export type ContextProps = {
  activeTab: string
  setActiveTab: (label: string) => void
}

type TabsComposition =  {
    Tab: React.FC<TabProps>
    Panel: React.FC<PanelProps>
}

export const TabsContext = createContext<ContextProps | undefined>(undefined)

const Tabs: React.FC & TabsComposition= props => {
    const [activeTab, setActiveTab] = useState("accounting")
    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            {props.children}
        </TabsContext.Provider>
    )
}

Tabs.Tab = Tab;
Tabs.Panel = Panel;

export { Tabs };