import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import createStore from '../store/helloWorldStore';
import HelloWorld from '../containers/HelloWorld';
import Other from '../containers/Other';
import Layout from '../containers/Layout';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
export default (props) => {
  const store = createStore(props);
  const reactComponent = (
    <Provider store={store}>
      <Router history={browserHistory}>    
        <Route path="/" component={Layout}>
          <IndexRoute component={HelloWorld} />
          <Route path="/other" component={Other} />
        </Route>
      </Router> 
    </Provider>
  );
  return reactComponent;
};
