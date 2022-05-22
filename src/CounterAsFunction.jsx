import { useState, useEffect, useRef } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');

  if (storage) return JSON.parse(storage);
  return 0;
};

const CounterAsFunction = () => {
  const [count, setCount] = useState(getStateFromLocalStorage());
  let message = '';

  // I
  // const increment = () => setCount(count + 1);

  // II Before: 0, after: 1 - the same as in class component
  //   const increment = () => {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     console.log('before setCount: ', count);
  //   };

  // III -  => +3
  //   const increment = () => {
  //     setCount((c) => c + 1);
  //     setCount((c) => c + 1);
  //     setCount((c) => c + 1);
  //     console.log('before setCount: ', count);
  //   };

  // IV
  const increment = () => {
    setCount((c) => {
      if (c >= 5) return c; // ! return c is a must (in class component it could be simply return)
      return c + 3;
    });
  };

  // useRef
  const countRef = useRef();

  if (countRef.current < count) message = 'Higher than previous value';
  if (countRef.current > count) message = 'Lower than previous value';

  countRef.current = count;

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    localStorage.setItem('counterState', count);
  }, [count]);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <p>{message}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default CounterAsFunction;
