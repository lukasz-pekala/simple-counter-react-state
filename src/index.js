import React from 'react';
import { createRoot } from 'react-dom/client';

import Counter from './Counter';
import CounterAsFunction from './CounterAsFunction';
import CounterAsFunctionWithCustomHook from './CounterAsFunctionWithCustomHook';

import './styles.scss';

const Application = () => {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter />
        <CounterAsFunction />
        <CounterAsFunctionWithCustomHook />
      </section>
    </main>
  );
};

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Application />);
