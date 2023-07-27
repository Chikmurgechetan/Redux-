const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);
console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

for (let i = 1; i < 5; i++) {
    store.dispatch({ type: 'INCREMENT' });
  }
 store.dispatch({type: 'DECREMENT'});