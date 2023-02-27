import { createSlice } from "@reduxjs/toolkit";
const initialState={
    taskslist:[],
    selectedtask:{}
}
const tasksslice=createSlice({
    name:'tasksslice',
    initialState,
    reducers:{
        addtasktolist:(state,action)=>{
             const id=Math.random()*100
             let task={...action.payload,id}
             state.taskslist.push(task)
        },
        removetaskfromlist:(state,action)=>{
            state.taskslist=state.taskslist.filter((task)=>task.id!==action.payload.id)
        },
        upadatetasklist:(state,action)=>{
            state.taskslist=state.taskslist.map((task)=>task.id===action.payload.id ? action.payload:task)
        },
        setseletctedtask:(state,action)=>{
            state.selectedtask=action.payload;
        }

    }
})

export const {addtasktolist,removetaskfromlist,upadatetasklist,setseletctedtask}=tasksslice.actions;
export default tasksslice.reducer;