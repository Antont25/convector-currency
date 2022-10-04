import React from 'react';
import {useAppSelector} from '../../common/hooks/useAppSelector';
import {Сurrency} from './Сurrency';
import {AppBar, Box, Container, Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {selectExchangeRates} from '../../common/utils/selectors';


export const Header = () => {
    console.log('header')
    const exchangeRates = useAppSelector(selectExchangeRates)
    const newExchangeRates = exchangeRates.filter(el => el.ccy !== 'UAH')
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Container fixed sx={{display: 'flex', justifyContent: 'space-between'}}>
                        {
                            newExchangeRates.length > 0 && newExchangeRates.map((el, index: number) => {
                                return <Typography key={index} variant="h6" component="div" sx={{flexGrow: 1}}>
                                    <Сurrency base_ccy={el.base_ccy}
                                              ccy={el.ccy}
                                              sale={el.sale}
                                    />
                                </Typography>

                            })
                        }
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

