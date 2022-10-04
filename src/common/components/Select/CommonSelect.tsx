import React, {memo, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useAppSelector} from '../../hooks/useAppSelector';
import {selectExchangeRates} from '../../utils/selectors';

export const CommonSelect = memo(({callback, isBuy}: CommonSelectType) => {
    const exchangeRates = useAppSelector(selectExchangeRates)
    const [value, setValue] = useState('')

    const handleChange = (event: SelectChangeEvent) => {
        callback(event.target.value as string);
    };

    const finalLabel = isBuy ? ' Currency buy' : ' Currency sell'

    if (!exchangeRates.length) {
        return <div>sss</div>
    }

    return (
        <Box sx={{mb: 2}}>
            <FormControl fullWidth>
                <InputLabel>{finalLabel}</InputLabel>
                <Select
                    label={finalLabel}
                    onChange={handleChange}
                    defaultValue={value}
                >
                    {
                        exchangeRates.length > 0
                        && exchangeRates.map((el, index) => {
                            return <MenuItem value={el.ccy} key={index}>{el.ccy}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
        ;
})
//type
type CommonSelectType = {
    callback: (currencies: string) => void
    isBuy?: boolean
}
