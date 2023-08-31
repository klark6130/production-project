/* eslint-disable i18next/no-literal-string */
import { Button } from '@/shared/ui/Button';
import { useDispatch } from 'react-redux';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions, useCounterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string;
}
export const Counter = (props: CounterProps) => {
    const counterValue = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={handleIncrement}>
                Increment
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDecrement}>
                Decrement
            </Button>
        </div>
    );
};
