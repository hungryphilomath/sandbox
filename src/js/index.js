import React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from './store/store';
import { ChildComponent } from './components/ChildComponent';

const App = () => {
  return (
    <StoreProvider>
      <ChildComponent name="Ahmed"/>
    </StoreProvider>
  );
};

render(<App />, document.getElementById('app'));
