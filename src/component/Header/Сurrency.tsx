import React from 'react';

export const Сurrency = ({ccy, sale, base_ccy}: СurrencyType) => {
    return (
        <div style={{textAlign: 'center'}}>
            1{ccy} = {sale} {base_ccy}
        </div>
    );
};
//type
type СurrencyType = {
    ccy: string
    sale: string
    base_ccy: string
}
