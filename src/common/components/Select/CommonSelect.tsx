import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useAppSelector} from '../../hooks/useAppSelector';
import {selectExchangeRates} from '../../../component/Header/selectors';

export const CommonSelect = ({callback, isBuy}: CommonSelectType) => {
    const exchangeRates = useAppSelector(selectExchangeRates)

    const handleChange = (event: SelectChangeEvent) => {
        callback(event.target.value as string);
    };

    const finalLabel = isBuy ? ' Currency buy' : ' Currency sell'

    return (
        <Box sx={{mb: 2}}>
            <FormControl fullWidth>
                <InputLabel>{finalLabel}</InputLabel>
                <Select
                    label={finalLabel}
                    onChange={handleChange}
                >
                    {
                        exchangeRates.length > 0
                        && exchangeRates.map((el, index) => {
                            return <MenuItem value={el.sale} key={index}>{el.ccy}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
        ;
}
//type
type CommonSelectType = {
    callback: (currencies: string) => void
    isBuy?: boolean
}
