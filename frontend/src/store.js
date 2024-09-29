import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productReducers'

const rootReducer = combineReducers({
  productList: productListReducer,
})

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {}
})

export default store