import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    years:[],
    todos:[]
};

export const Slice = createSlice({

    name:"Year",
    initialState,
    reducers:{
        Addto:(state,action)=>{
            const year = {id:nanoid(),number:action.payload}
            state.years.push(year)
        },
        removeto:(state,action)=>{
            state.years = state.years.filter((year)=>year.id !==action.payload)
        },
        add:(state,action)=>{
            const todo = {id:nanoid(),text:action.payload}
            state.todos.push(todo)
        },
        remove:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !==action.payload)
        }
    }
})

export const {Addto,removeto,add,remove} = Slice.actions;
export default Slice.reducer