import {RootState} from '../../app/store';

export const selectExchangeRates = (state: RootState) => state.app.dataExchangeRates
