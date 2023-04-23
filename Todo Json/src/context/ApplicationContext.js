import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

var contextData={

    todo:{

        addTodo:(obj)=>{ return axios.post("http://localhost:3033/todos/",obj); },
        updateTodo:(id,obj)=>{return axios.put("http://localhost:3033/todos/"+id,obj);},
        deleteTodo:(id)=>{return axios.delete("http://localhost:3033/todos/"+id);},
        getAll:()=>{return axios.get("http://localhost:3033/todos/");},
        changeStatus:(id)=>{return axios.get("http://localhost:3033/todos/"+id).then((res)=>{
            var d = res.data;
            d.iscompleted = !d.iscompleted;
            axios.put("http://localhost:3033/todos/"+id,d);

        })},
    },
 

};


export const applicationContext = React.createContext(contextData);


function AppContext(props){
    return(
        <applicationContext.Provider value={contextData}>
            {props.children}
        </applicationContext.Provider>
    )
}
export default AppContext;