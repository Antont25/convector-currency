import React, {useEffect, useState} from 'react';
import {CommonSelect} from '../../common/components/Select/CommonSelect';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';

export const CurrencyConverter = () => {
    const [buyCurrency, setBuyCurrency] = useState('');
    const [sellCurrency, setSellCurrency] = useState('');

    const [valueSell, setValueSell] = useState();
    const [valueBuy, setValueBuy] = useState();


    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Box sx={{
                    width: '300px',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    m: 2
                }}>
                    <CommonSelect callback={setSellCurrency}/>
                    <TextField label="Sell" variant="outlined" value={valueSell}/>
                </Box>
                <Box sx={{
                    width: '300px',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    m: 2
                }}>
                    <CommonSelect callback={setBuyCurrency} isBuy={true}/>
                    <TextField label="Buy" variant="outlined" value={valueBuy}/>
                </Box>
            </Box>
        </div>
    );
};

