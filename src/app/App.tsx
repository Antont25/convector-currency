import React, {useEffect} from 'react';
import './App.css';
import {fetchExchangeRates} from './appSlice';
import {useAppDispatch} from '../common/hooks/useAppDispatch';
import {Header} from '../component/Header/Header';
import {CurrencyConverter} from '../component/Main/CurrencyConverter';
import {Container} from '@mui/material';

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchExchangeRates())
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <Container fixed sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <main>
                    <CurrencyConverter/>
                </main>
            </Container>
        </div>
    );
}

export default App;
