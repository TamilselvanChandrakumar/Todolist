import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {taskslist}=useSelector((state)=>state.tasks)
  return (
    <>
    <h2 className='text-center my-4 text-primary'>project management</h2>
    <p className='text-center lead'>{`Currently ${taskslist.length} task running`}</p>
    </>
  )
}

export default Navbar