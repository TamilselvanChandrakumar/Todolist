import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addtasktolist } from '../slices/tasksslice';
const AddTask = () => {
  const dispatch=useDispatch()
  const [title,settitle]=useState('');
    const [description,setdescription]=useState('')
    const addtask=(e)=>{
        e.preventDefault();
        dispatch(addtasktolist({title,description}));
        settitle('');
        setdescription('');
    }
    
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task title</Form.Label>
        <Form.Control type="text" placeholder="Enter a task" value={title} onChange={(e)=>
         settitle(e.target.value)
        }/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task description</Form.Label>
        <Form.Control type="text" placeholder="Enter a task description" value={description} onChange={(e)=>setdescription(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>addtask(e)}>
        Addtask
      </Button>
    </Form></>
  )
}

export default AddTask