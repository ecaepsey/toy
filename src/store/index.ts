

import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import  productsSlice from '../features/favorite/productsSlice'

const reducer = combineReducers({
   
    productsSlice

})

const store = configureStore({
    reducer,
})

export default store;