import React from 'react'
import {Provider} from 'react-redux'
import reducers from './reducers'
import ListResult from './ListResult'
import configureStore from './configureStore';

let store = configureStore();

/* Aquí no pongo el return porque estoy usando ES6 */
const App = () => (
    <Provider store={store}>
            <ListResult />
    </Provider>
)

export default App