import { createStore } from 'redux'
import tokenApp from '../reducers'

const store = createStore(tokenApp);
export {store};