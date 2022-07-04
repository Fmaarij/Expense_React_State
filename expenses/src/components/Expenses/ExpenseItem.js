import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // const [price, setPrice] = useState(props.amount);
  
   
  const clickHandeler = () =>{
    let userTitre = prompt("veuillez taper le titre");
    setTitle(userTitre);
    console.log(title);
  };



// const changePrice = () =>{ 
//   let userPrice = prompt("veuillez taper le price");
//   setPrice(userPrice);
// };

  return (
    <Card className='expense-item'>

      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
      <button onClick={clickHandeler}>Change Title</button>
        <h2>{title}</h2>
        {/* <button onClick={changePrice}>Change Price</button> */}
        <div className='expense-item__price'>${props.amount}</div>
       
      </div>
    </Card>
  );
}

export default ExpenseItem;