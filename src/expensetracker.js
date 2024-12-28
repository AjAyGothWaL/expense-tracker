import React, { useState } from "react";
import './expensetracker.css'; 

const Expensetracker = () => {
  const [balance, setBalance] = useState(0);
  const [exp, setExp] = useState([]);
  const [inc, setInc] = useState([]);
  const [value, setValue] = useState("");
  const [transaction, setTransaction] = useState("");
  const[intial,setinitial]=useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleTransactionChange(e) {
    setTransaction(e.target.value);
  }

  function handleExpenses() {
    if (value > 0) {
    const expense = parseInt(value);
    setBalance(balance - expense);
    setExp([...exp, { amount: expense, description: transaction }]);
    setValue("");
    setTransaction("");
}
  }

  function handleIncome() {
    const income = parseInt(value);
    setBalance(balance + income);
    setInc([...inc, { amount: income, description: transaction }]);
    setValue("");
    setTransaction("");
  }

  function removeexpenses(index){
      const newExp=exp.filter((_,i)=>i!==index);
      setExp(newExp);
      setBalance(balance+exp[index].amount);
  }
  
  function removeincome(index) {
    const newInc = inc.filter((_, i) => i !== index);
    setInc(newInc); 
    setBalance(balance-inc[index].amount);
}
function handleintialbalance(e){
   setinitial(e.target.value);
}
function handleinitial(){
    const setbalance=parseInt(intial);
    setBalance(setbalance);
    setinitial("");
}
  return (
    <div className="container">
      <h1>Balance: {balance}</h1>
      <div className="input-container">
    <input placeholder="Set the Balance accordingly" value={intial} onChange={handleintialbalance} >
    </input>
    <button className="set-balance-button" onClick={handleinitial}>Set Balance</button> 




        <input 
          type="text" 
          onChange={handleChange} 
          value={value} 
          placeholder="Enter amount" 
        />
        <input 
          type="text" 
          onChange={handleTransactionChange} 
          value={transaction} 
          placeholder="Description (What you bought or added)" 
        />
      </div>
      <div className="button-container">
        <button onClick={handleExpenses}>Add Expense</button>
        <button onClick={handleIncome}>Add Income</button>
      </div>

      <div className="transaction-lists">
        <div className="expenses">
          <h2>Expenses</h2>
          <ul>
            {exp.map((expense, index) => (
              <li key={index} className="expense-item">
                <strong>{expense.description}</strong>: ₹{expense.amount}
                <button onClick={() => removeexpenses(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="income">
          <h2>Income</h2>
          <ul>
            {inc.map((income, index) => (
              <li key={index} className="income-item">
                <strong>{income.description}</strong>: ₹{income.amount}
                <button onClick={() => removeincome(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Expensetracker;
