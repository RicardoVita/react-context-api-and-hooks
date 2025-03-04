import P from 'prop-types';
import { useCounterContext } from '../../context/CounterContext';

export const Heading = ({ children }) => {
    const [state, actions] = useCounterContext();

    return <h1 style={{ fontSize: '60px' }}>{state.counter}</h1>
};

