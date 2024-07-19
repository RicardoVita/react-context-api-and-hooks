import { useEffect } from "react";
import { useCounterContext } from "../../context/CounterContext";
import { Heading } from "../../components/Heading";
import { Button } from "../../components/Button";

export const Home = () => {
    const [state, actions] = useCounterContext();

    const handleError = () => {
        actions
            .asyncError()
            .then((r) => console.log(r))
            .catch((e) => console.log(e.name, ':', e.message));
    }

    useEffect(() => {
        actions.increase();
    }, [actions]);

  return (
    <div>
        <Heading/>

        <div>
            <Button onButtonClick={actions.increase}>Increase</Button>
            <Button onButtonClick={actions.decrease}>Decrease</Button>
            <Button onButtonClick={actions.reset}>Reset</Button>
            <Button onButtonClick={() => actions.setCounter({ counter: 10 })}>set 10</Button>
            <Button onButtonClick={() => actions.setCounter({counter: 100 })}>set 100</Button>
            <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>AsyncIncrease</Button>
            <Button disabled={state.loading} onButtonClick={handleError}>AsyncError</Button>
        </div>
    </div>
  );
}
