import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, increment, reset } from '../redux/features/count.slice'

export const Button = ({children, onClick, disabled=false})=>{
    return <button disabled={disabled} onClick={onClick} className='p-2 bg-red-200 active:bg-red-300 cursor-pointer'>
        {children}
    </button>
}

const Footer = () => {
   const dispatch = useDispatch()
   const count = useSelector(state => state.counter.value)
  return (
    <div>
        <p>Footer</p>
        <Button onClick={()=> dispatch(increment(1))}>
            <span>Increment 1</span>
        </Button>
        <Button onClick={()=> dispatch(increment(10))}>
            <span>Increment 10</span>
        </Button>
        <Button onClick={()=> dispatch(increment(100))}>
            <span>Increment 100</span>
        </Button>
        <Button disabled={count <= 1} onClick={()=> dispatch(dec())}>
            <span>Decrement</span>
        </Button>
        <Button onClick={()=> dispatch(reset())}>
            <span>Reset</span>
        </Button>
    </div>
  )
}

export default Footer