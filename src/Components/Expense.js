import React, {useState} from 'react';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter.js';
import ExpensesChart from './ExpensesChart.js';
import ExpenseItem from './ExpenseItem.js';


const Expense = (props) =>{
    
    const [filteredYear, setFilteredYear] = useState('2022');
    
    const onSelecetedYear = (expenseYear) => {
        //console.log(expenseYear);
        setFilteredYear(expenseYear);
    }
    
    const filteredExpenses = props.items.filter(expItem => {
        return expItem.date.getFullYear().toString() === filteredYear;
    });
    
    return(
        
        <div className="expenses">
        <ExpenseFilter selected = {filteredYear} onSelectYear = {onSelecetedYear}/>
        <ExpensesChart expenses = {filteredExpenses}/>
        
        {filteredExpenses.length === 0 ? (<p className="noItem"> NO Items Found! </p>) : 
            filteredExpenses.map(expItem => 
            <ExpenseItem 
                key = {expItem.id}
                title = {expItem.title} 
                amount = {expItem.amount}  
                date = {expItem.date}/>
        )
        }
        
        </div>
        
    );
}

export default Expense;