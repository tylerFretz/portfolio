import React, { useState } from 'react';

interface Tab {
	title: string,
	value: string
}

type State = {
	currentTab: Tab
};

type Actions = {
	setCurrentTab: ({ title, value }: Tab) => void
};

const TabStateContext = React.createContext<State>({} as State);
const TabActionsContext = React.createContext<Actions>({} as Actions);


const TabContextProvider: React.FC = ({ children }) => {
	const [currentTab, setCurrentTab] = useState<Tab>({ title: 'home.tsx', value: 'home' });

	return (
		<TabStateContext.Provider value={{ currentTab }}>
			<TabActionsContext.Provider value={{ setCurrentTab }}>
				{children}
			</TabActionsContext.Provider>
		</TabStateContext.Provider>
	);
};

const useTabState = () => React.useContext(TabStateContext);
const useTabActions = () => React.useContext(TabActionsContext);

export { useTabState, useTabActions, TabContextProvider };