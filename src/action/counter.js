import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../reducer/counterSlice'
import { Button, TextField } from "@mui/material";


export const Counter=() =>{
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    if (event.target.value==='')
      dispatch(incrementByAmount(0));
    else dispatch(incrementByAmount(parseInt(event.target.value)));
}
  return (
    <div>
      <form>
        <input type="number" class="m-3" placeholder="Enter a number" onChange={handleChange}/><br/>
  
        <button class="bg-pink-500 hover:bg-pink-700 w-10" onClick={() => dispatch(decrement())}>- </button> 
        <input type="text" value={ count }  class="w-auto"/>
        <button class="bg-sky-500 hover:bg-sky-700 w-10"  onClick={() => dispatch(increment())}>+</button>
      </form>
    </div>
  )
}