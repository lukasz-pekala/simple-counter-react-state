import React, { Component, setState } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');

  if (storage) return JSON.parse(storage);
  return 0;
};

function callbackFunctionThatNeedsToBeBoundToThis() {
  console.log(`After state has been updated ${this.state.count}`);
  localStorage.setItem('counterState', this.state.count);
}

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: getStateFromLocalStorage(),
    };

    // this.setState is undefined - to fix this we can bind class' this to the function context
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    // I
    // this.setState({ count: this.state.count + 1 });

    // II
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });

    // III
    // this.setState((state) => {
    //   return { count: state.count + 1 };
    // });
    // this.setState((state) => {
    //   return { count: state.count + 1 };
    // });
    // this.setState((state) => {
    //   return { count: state.count + 1 };
    // });

    // IV
    // this.setState((state) => {
    //   if (state.count >= 7) return;
    //   return { count: state.count + 1 };
    // });

    // V
    // const callbackFunction = () => {
    //   console.log(`After state has been updated ${this.state.count}`);
    //   localStorage.setItem('counterState', this.state.count);
    // };
    // this.setState((state) => {
    //   if (state.count >= 7) return;
    //   return { count: state.count + 1 };
    // }, callbackFunction);

    // VI
    this.setState((state) => {
      if (state.count >= 7) return;
      return { count: state.count + 1 };
    }, callbackFunctionThatNeedsToBeBoundToThis.bind(this));
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }
  render() {
    console.log('Component has been rendered');

    return (
      <div className="Counter">
        <p className="count">{this.state.count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
