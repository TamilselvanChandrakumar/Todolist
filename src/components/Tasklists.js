import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Updatetask';
import { useDispatch, useSelector } from 'react-redux';
import { setseletctedtask,removetaskfromlist} from '../slices/tasksslice';


const Tasklists = (task) => {
  const {taskslist}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch();
    const edititem=(task)=>{
console.log('edit item');

dispatch(setseletctedtask(task))
setModalShow(true);
    }
    const deleteitem=(task)=>{
   console.log('delete item');
   dispatch(removetaskfromlist(task))
    }
    const [modalShow,setModalShow]=useState(false);
  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>task</th>
          <th>description</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {
          taskslist && taskslist.map((task,index)=>{
            return (
              <tr key={task.id}>
          <td>{index+1}</td>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td> <Button variant="primary" onClick={()=>edititem(task)} >Edit</Button> <Button variant="primary" onClick={()=>deleteitem(task)}>Delete</Button></td>
        </tr>
            )
          })
        }
        
       </tbody>
    </Table>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

export default Tasklists