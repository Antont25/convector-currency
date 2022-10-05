import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {api, ExchangeRatesType} from '../api/api';
import axios, {AxiosError} from 'axios';


export const fetchExchangeRates = createAsyncThunk<ExchangeRatesType[], undefined, { rejectValue: string }>('app/fetchExchangeRates', async (param, {rejectWithValue}) => {
    try {
        return await api.getExchangeRates()
    } catch (e) {

        const error = e as Error | AxiosError
        return rejectWithValue(error.message ? error.message : 'Some error occurred')
    }

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
            if (action.payload) {
                const newArrСurrencies = action.payload.map(el => ({
                    ...el,
                    buy: (+el.buy).toFixed(2),
                    sale: (+el.sale).toFixed(2),
                }))
                const UAH = {ccy: 'UAH', base_ccy: 'UAH', buy: '1', sale: '1'}
                newArrСurrencies.push(UAH)
                state.isInitialized = true
                state.dataExchangeRates = newArrСurrencies
                state.status = 'succeeded'
            }
        })
            .addCase(fetchExchangeRates.rejected, (state, action) => {
                state.error = action.payload as string
                state.isInitialized = true
                state.status = 'failed'
            })
            .addCase(fetchExchangeRates.pending, (state) => {
                state.status = 'loading'
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

