import {combineReducers, createStore, applyMiddleware  } from 'redux'
import cardReducer from './CardReducer.js'
import basketReducer from './BasketReducer.js'

import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let redusers=combineReducers({
	itemsPage:cardReducer,
	basketPage: basketReducer,

})

let store=createStore(redusers,applyMiddleware(thunkMiddleware))

window.store=store

export default store