import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksslice';
export const store=configureStore({
    reducer:{
        tasks:tasksReducer
    }
})