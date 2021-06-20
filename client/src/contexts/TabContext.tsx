import React, { useState } from 'react';

type State = {
	currentTab: string
};

type Actions = {
	setCurrentTab: (value: string) => void
};

const TabStateContext = React.createContext<State>({} as State);
const TabActionsContext = React.createContext<Actions>({} as Actions);


const TabContextProvider: React.FC = ({ children }) => {
	const [currentTab, setCurrentTab] = useState<string>('home');

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