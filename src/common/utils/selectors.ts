import {RootState} from '../../app/store';

export const selectExchangeRates = (state: RootState) => state.app.dataExchangeRates
export const selectIsInitialized = (state: RootState) => state.app.isInitialized
export const selectError = (state: RootState) => state.app.error
