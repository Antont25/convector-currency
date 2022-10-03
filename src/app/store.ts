import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {appSlice} from './appSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {app: appSlice},
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})
//type
export type ActionsType = any
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>

