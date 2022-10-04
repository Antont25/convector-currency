import React, {useEffect} from 'react';
import './App.css';
import {fetchExchangeRates} from './appSlice';
import {useAppDispatch} from '../common/hooks/useAppDispatch';
import {Header} from '../component/Header/Header';
import {CurrencyConverter} from '../component/Main/CurrencyConverter';
import {Container} from '@mui/material';
import {Loading} from '../common/components/Loading/Loading';
import {useAppSelector} from '../common/hooks/useAppSelector';
import {selectError, selectIsInitialized} from '../common/utils/selectors';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function App() {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector(selectIsInitialized)
    const error = useAppSelector(selectError)

    useEffect(() => {
        dispatch(fetchExchangeRates())
    }, [])

    if (!isInitialized) {
        return <Loading/>
    }

    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <Container fixed
                       sx={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           minHeight: '95vh'
                       }}>
                <main>
                    <CurrencyConverter/>
                </main>
                {error && <Stack sx={{width: '50%', position: 'absolute', bottom: 10}} spacing={2}><Alert
                    severity="error">{error}</Alert></Stack>}
            </Container>
        </div>
    );
}

export default App;
