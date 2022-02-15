import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    const onSaveExpenseHandler = (enterExpenseData) =>{
        const expenseInfo = {
           ...enterExpenseData,
            id: Math.random().toString()
        }
        
        console.log(expenseInfo);
        props.onAddExpense(expenseInfo);
    }
    
    return (
    <div className="new-expense">
        <ExpenseForm onSaveHandler={onSaveExpenseHandler}></ExpenseForm>
    </div>
    );
    
    
};

export default NewExpense;