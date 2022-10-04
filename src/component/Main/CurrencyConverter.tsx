import React, {ChangeEvent, useEffect, useState} from 'react';
import {CommonSelect} from '../../common/components/Select/CommonSelect';
import Box from '@mui/material/Box';
import {TextField} from '@mui/material';
import {useAppSelector} from '../../common/hooks/useAppSelector';
import style from '../../common/style/comonStyle.module.css'
import {Loading} from '../../common/components/Loading/Loading';
import {selectExchangeRates} from '../../common/utils/selectors';

export const CurrencyConverter = () => {
    const exchangeRates = useAppSelector(selectExchangeRates)

    const [currencyBuy, setCurrencyBuy] = useState<string>('');
    const [currencySell, setCurrencySell] = useState<string>('');

    const [buyWell, setBuyWell] = useState<string>('');
    const [sellWell, setSellWell] = useState<string>('');

    const [valueSell, setValueSell] = useState<number>(1);
    const [valueBuy, setValueBuy] = useState<number>(0);

    const [curs, setCurs] = useState<number>(0)


    const onChangeValueSellHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValueSell(+e.currentTarget.value)
        setValueBuy(+(+e.currentTarget.value * curs).toFixed(3))
    }

    const onChangeValueBuyHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValueBuy(+e.currentTarget.value)
        if (currencySell === 'UAH') {
            setValueSell(+(+e.currentTarget.value * +buyWell).toFixed(3))
        } else {
            setValueSell(+(+e.currentTarget.value * (+buyWell / +sellWell)).toFixed(3))
        }
    }

    const findCurrency = (currency: string) => {
        return exchangeRates.find(el => el.ccy === currency)
    }

    useEffect(() => {
        if (+sellWell > 0 && +buyWell > 0) {
            if (currencyBuy === 'UAH') {
                setCurs(+sellWell)
            } else if (currencySell === 'UAH') {
                setCurs(1 / +buyWell)
            } else {
                setCurs(+sellWell / +buyWell)
            }
        }
    }, [buyWell, sellWell])

    useEffect(() => {
        const currency = findCurrency(currencyBuy)
        if (currency) {
            setBuyWell(currency.sale)
        }
    }, [currencyBuy])

    useEffect(() => {
        const currency = findCurrency(currencySell)
        if (currency) {
            setSellWell(currency.sale)
        }
    }, [currencySell])


    useEffect(() => {
        if (curs > 0) {
            setValueBuy(+(valueSell * curs).toFixed(3))
        }
    }, [curs])

    if (!exchangeRates.length) {
        return <Loading/>
    }
    return (
        <div>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div className={style.currencyItem}>
                    <CommonSelect callback={setCurrencySell}/>
                    <TextField type={'number'} label="Sell" variant="outlined" value={valueSell}
                               onChange={onChangeValueSellHandler}/>
                </div>
                <Box className={style.currencyItem}>
                    <CommonSelect callback={setCurrencyBuy} isBuy={true}/>
                    <TextField type={'number'} label="Buy" variant="outlined" value={valueBuy}
                               onChange={onChangeValueBuyHandler}/>
                </Box>
            </Box>
        </div>
    );
};

