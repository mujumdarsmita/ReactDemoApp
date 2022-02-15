import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    
    const onChangeTitleHandler = (event) => {
        setTitle(event.target.value);
    }
    
    const onChangeAmountHandler = (event) => { 
        setAmount(event.target.value);
    }
    
    const onChangeDateHandler = (event) => {
        setDate(event.target.value);
    }
    
    const clickIt = () => {
      //alert("hi");
    }
    
    const onSubmitHandler =(event)=>{
        event.preventDefault();
        
         const expenseInfo = {
            title: enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        };
        
        props.onSaveHandler(expenseInfo);
        setTitle('');
        setAmount('');
        setDate('');
    }
    
   return (
       <form onSubmit={onSubmitHandler}>
           <div className="new-expense__controls">
                <div className="new-expense__control ">
                    <label>Title</label>
                    <input type='text' value ={enteredTitle} onChange={onChangeTitleHandler}/>
                </div>
                <div className="new-expense__control ">
                    <label>Amount</label>
                    <input type='number' min ="0.01" step ="0.01" value ={enteredAmount} onChange={onChangeAmountHandler}/>
                </div>
                <div className="new-expense__control ">
                    <label>Date</label>
                    <input type='date' min="01-01-2019" max="01-01-2022" value ={enteredDate} onChange={onChangeDateHandler}/>
                </div>
            </div>
             <div className="new-expense__actions"> 
                    <button type="submit" onClick ={clickIt}>Add Expense</button>
            </div>
    </form>
   );
};

export default ExpenseForm;