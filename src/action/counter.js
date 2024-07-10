import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../reducer/counterSlice'
import { Button, TextField } from "@mui/material";


export const Counter=() =>{
  const val = 0;
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleChange = (event) => {
    if (event.target.value==='')
      dispatch(incrementByAmount(val));
    else dispatch(incrementByAmount(parseInt(event.target.value)));
}
  return (
    <div>
        <div>
        <Button variant="contained" size="small" color="secondary"
          onClick={() => dispatch(decrement())}>-</Button>
            &nbsp; <span>{count}</span> &nbsp; 
        <Button variant="contained" size="small" color="primary"
          onClick={() => dispatch(increment())}> +</Button>
          </div> <br/>
        <TextField size="small" label="Enter a number" variant="outlined" type="number" onChange={handleChange} />
        
    </div>
  )
}