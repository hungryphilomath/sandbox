import { useStore } from './store';

export const useCounter = () => {
	const { state, dispatch } = useStore();
	return {
		count: state.count,
		decrement: () => dispatch({ message: 'Decremented', type: 'decrement' }),
		increment: () => dispatch({ message: 'Incremented', type: 'increment' }),
		message: state.message,
		reset: () => dispatch({ message: 'Reset', type: 'reset' })
	};
};
