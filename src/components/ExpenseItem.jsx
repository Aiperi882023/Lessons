 import {ExpenseDate} from './ExpenseDate';
 import './ExpenseItem.css'
 
  export function ExpenseItem (props) {
    console.log(props)
  const expenseTitle = props.title
  const expenseDate = props.date
  
  const expenseAmount =props.amount

 return (
   <div className='expense-item'>
     <ExpenseDate date={props.date}/>
  <h2 className='expense-item__description'>{expenseTitle}</h2>
  <div className='expense-item__price'>${expenseAmount}</div>
</div>
 );
}


// export default ExpenseItem;