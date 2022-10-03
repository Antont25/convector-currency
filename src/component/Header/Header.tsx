import React from 'react';
import {useAppSelector} from '../../common/hooks/useAppSelector';
import {selectExchangeRates} from './selectors';
import {Сurrency} from './Сurrency';
import {AppBar, Box, Container, IconButton, Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';


export const Header = () => {
    const exchangeRates = useAppSelector(selectExchangeRates)
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Container fixed sx={{display: 'flex', justifyContent: 'space-between'}}>
                        {
                            exchangeRates.length > 0 && exchangeRates.map((el, index: number) => {
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

