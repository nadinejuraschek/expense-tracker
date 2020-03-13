import React, { useContext } from 'react';

const TransactionList = ({ transaction }) => {
    return (
        <li className="minus">
            {transaction.text} <span>-$400</span>
            <button className="delete-btn"></button>
        </li>
    );
};

export default TransactionList;