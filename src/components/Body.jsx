import React, { useContext, useState } from 'react'
import '../styles/styles_base.css';
import '../styles/Body/styles.css';
import Delete from '../assets/delete.png';
import Add from '../assets/add.png';
import FooterTabs from './FooterTabs';
import TabPending from './Tab_Pending';
import TabCompleted from './Tab_Completed';
import TabTrash from './Tab_Trash';
import { TodoContext } from '../context/TodoContext';


const Body = () => {
  const { todoGlobalState, dispatchTodoGlobalState } = useContext(TodoContext);
  // console.log(JSON.stringify(todoGlobalState.Tasks));
  const[taskText, setTaskTest] = useState("");

  const inputTaskDeleteOption_ClassName = (taskText !== "") ? "visible left-action-container flex-column-center" : "left-action-container flex-column-center";
  const inputTaskAddOption_ClassName = (taskText !== "") ? "visible right-action-container flex-column-center" : "right-action-container flex-column-center";

  function resetInputTaskText(){
    setTaskTest("");
  }

  function getNumberLessThan10With0AsPrefix(number){
    if(number<10){
        return (`0${number}`);
    } else {
        return (`${number}`);
    }
  }

  function addTask(){
    if(taskText==="" || taskText===" "){
      return
    }
    
    const date = new Date();
    const tasksDescriptionsArray = [];
    const keys = Object.keys(todoGlobalState.Tasks);

    
    for(let i = 0; i < keys.length; i++){
      tasksDescriptionsArray.push(todoGlobalState.Tasks[keys[i]]["Description"]);
    }
    if(tasksDescriptionsArray.includes(taskText)){
      alert("Already in your tasks!");
      return
    }

    const timestamp = `${date.getFullYear()}${getNumberLessThan10With0AsPrefix(date.getMonth()+1)}${getNumberLessThan10With0AsPrefix(date.getDate())}${getNumberLessThan10With0AsPrefix(date.getHours())}${getNumberLessThan10With0AsPrefix(date.getMinutes())}${getNumberLessThan10With0AsPrefix(date.getSeconds())}${getNumberLessThan10With0AsPrefix(date.getMilliseconds())}`
    dispatchTodoGlobalState({type:"AddTask", payload:{
      itemKey: timestamp,
      Description: taskText,
      Status: "Pending"
    }});
    setTaskTest("")
  }

  return (
    <div className="main-container">
      <div className="add-task-main-container flex-column-center">
        <div className="input-main-container">
          <div className={inputTaskDeleteOption_ClassName} onClick={resetInputTaskText}>
            <img src={Delete} alt="Delete icon" className="delete-icon" />
          </div>
          <input type="text" className="input-task font-size-md" placeholder="Ex: Buy milk" value={taskText} onChange={(e) => setTaskTest(e.target.value)}/>
          <div className={inputTaskAddOption_ClassName} onClick={addTask}>
            <img src={Add} alt="Add icon" className="add-icon" />
          </div>
        </div>
      </div>
      <div className="tasks-main-container flex-column-center">
        <div className="list-card">
          {
            (todoGlobalState.TabName === 'Pending') ? (
              <TabPending />
            ) : (todoGlobalState.TabName === 'Completed') ? (
              <TabCompleted />
            ) : (todoGlobalState.TabName === 'Trash') ? (
              <TabTrash />
            ) : (
              <p>{`Context: ${todoGlobalState.TabName}`}</p>
            )
          }
          <FooterTabs />
        </div>
      </div>
    </div>
  )
}

export default Body
