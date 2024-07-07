import React from 'react'
import { Link } from 'react-router-dom'
function Navber() {

  return (
    <div className='text-center'>
      <button><Link to='/login'>login</Link></button>
      <br />
      <button><Link to='/signup'>signup</Link></button>
    </div>
  )
}

export default Navber
