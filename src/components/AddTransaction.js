import React, { useState } from 'react';

const AddTransaction = () => {
    const [ text, setText ] = useState('');
    const [ amount, setAmount] = useState(0);
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className="form-control">
                    <label>Text</label>
                    <input type="text" value={text} onChange={(event) => event.target.value} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(event) => event.target.value} placeholder="Enter amount..." />
                </div>
                    <button className="btn">Add transaction</button>
            </form>
        </div>
    );
};

export default AddTransaction;