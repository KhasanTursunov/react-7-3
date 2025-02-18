import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex container p-5 mx-auto h-20 items-center gap-8'>
      
      <Link to={"/"} className='text-2xl font-medium flex-1'>Uzum Market</Link>
      <Link to={"/"}>Mahsulotlar</Link>
      <Link to={"/about"}>Elektronika</Link>
      <Link to={"/contact"}>Chegirmalar</Link>
      <Link to={"/wishlist"}>Yoqtirganlar</Link>
      <Link to={"/cart"}>Savat</Link>
    </div>
  )
}

export default Header