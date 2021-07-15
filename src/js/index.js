import React from 'react';
import { render } from 'react-dom';
import { ChildComponent } from './components/childComponent/ChildComponent';
import { StoreProvider } from './store/store';

const App = () => {
	return (
		<StoreProvider>
			<ChildComponent name="Ahmed"/>
		</StoreProvider>
	);
};

render(<App />, document.getElementById('app'));
