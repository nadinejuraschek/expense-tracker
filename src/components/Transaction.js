import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '';

    return (
        <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}></button>
        </li>
    );
};

export default TransactionList;