import React,{Component} from 'react';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware} from 'redux'
import reducer from './Reducer/Index'
import Form from './Form'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import Saga from "./Saga/rootSaga";

const sagaStore = createSagaMiddleware()
const store = createStore(reducer , composeWithDevTools(applyMiddleware(logger,sagaStore)))
sagaStore.run(Saga)
class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <Form />
      </Provider>
        );
  }
}

export default App;
