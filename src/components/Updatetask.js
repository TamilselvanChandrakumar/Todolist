import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { upadatetasklist } from '../slices/tasksslice';

const  MyVerticallyCenteredModal = (props) => {
  const {selectedtask}=useSelector((state)=>state.tasks)
  const [title,settitle]=useState('');
  const [description,setdescription]=useState('')
  const [id,setid]=useState(0);
  const dispatch=useDispatch();
    const updatetask=()=>{
        props.onHide()
        dispatch(upadatetasklist({id,title,description}))
    };
   
    useEffect(()=>{
      if (Object.keys(selectedtask).length !== 0) {
      settitle(selectedtask.title);
      setdescription(selectedtask.description); 
      setid(selectedtask.id)
      }
      
    },[selectedtask])

  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
     
    </Form>
      </Modal.Body>
      <Modal.Footer> <Button variant="primary" type="submit" onClick={(e)=>updatetask(e)}>
        Updatetask
      </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default  MyVerticallyCenteredModal