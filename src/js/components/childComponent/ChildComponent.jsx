import React from 'react';
import { useCounter } from '../../store/storeApi';

export const ChildComponent = (props) => {
	const { count, message, increment, decrement, reset } = useCounter();

	return (
		<div className="child-component">
			<h1>Hello {props.name}</h1>
			<p>Count: {count}</p>
			<button onClick={() => increment()}>+</button>
			<button onClick={() => decrement()}>-</button>
			<button onClick={() => reset()}>Reset</button>
			<p>{message}</p>
		</div>
	);
};
