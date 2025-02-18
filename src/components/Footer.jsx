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
    <></>
)
}

export default Footer