import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, ExchangeRatesType} from '../api/api';


export const fetchExchangeRates = createAsyncThunk('app/fetchExchangeRates', async (param, {dispatch}) => {
    return await api.getExchangeRates()
})

export const slice = createSlice({
    name: 'app',
    initialState: {
        isInitialized: false,
        status: 'idle',
        dataExchangeRates: [],
        error: null,
    } as InitialStateType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchExchangeRates.fulfilled, (state, action) => {
            state.isInitialized = true
            state.dataExchangeRates = action.payload.map(el => ({
                ...el,
                buy: (+el.buy).toFixed(2),
                sale: (+el.sale).toFixed(2),
            }))
        })
    }
})
export const appSlice = slice.reducer
//type
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
    dataExchangeRates: ExchangeRatesType[]
}

