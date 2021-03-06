import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NewExpense from './Components/NewExpenseComp/NewExpense.js';
import Expense from './Components/Expense';

const INITIAL_EXPENSE = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Pencil Stand',
      amount: 10,
      date: new Date(2022, 1, 12),
    },
  ];


function App() {
     
    const [expenses, setExpense] = useState(INITIAL_EXPENSE);
    
    const onAddExpenseHandler = (expense) =>{
        //console.log("In APP.JS");
        setExpense(prevExpense => {
            return [expense, ...prevExpense];
        })
        
    }
    
  return (
      <div>
        <NewExpense onAddExpense = {onAddExpenseHandler}/> 
        <Expense items={expenses}> </Expense>
      </div>    
  );
}

export default App;
