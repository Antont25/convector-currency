import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import {appSlice} from './appSlice';

export const store = configureStore({
    reducer: {app: appSlice},
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})
//type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
