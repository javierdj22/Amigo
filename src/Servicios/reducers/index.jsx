import {combineReducers} from 'redux'
import dataReducer from './dataReducer';

//combineReducers nos permite crear diferentes combineReducers
//aquí le pasamos el reducer que llama al archivo json con los superheroes
export default combineReducers({
    dataReducer    
})