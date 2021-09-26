import React, { useContext, useEffect, useState } from 'react';
import '../styles/styles_base.css';
import '../styles/Body/tabs_styles.css';
import { TodoContext } from '../context/TodoContext';
import TaskCard from './TaskCard';

const Tab_Completed = (props) => {
  const {todoGlobalState } = useContext(TodoContext);

  let tasksKeysArray;
  if(todoGlobalState.Tasks!==null && todoGlobalState.Tasks!==undefined){
    tasksKeysArray = Object.keys(todoGlobalState.Tasks);
    tasksKeysArray.sort();
  }
  const [tasksKeys, setTaskKeys] = useState();
  const [tasks, setTask] = useState();

  useEffect(() => {
    setTaskKeys(tasksKeysArray);
    setTask(todoGlobalState.Tasks)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoGlobalState.Tasks])


  return (
    <div className="width-100percent tab-main-container">
      {
        (tasksKeys) && tasksKeys.map((key)=>{
          if(tasks[key]["Status"]==="Completed"){
            return (
              <TaskCard description={tasks[key]["Description"]} key={Number(Math.random() * (1000 - 0) + 0)} itemKey={key} filter="Completed"/>
            )
          } else {
            return <div key={Number(Math.random() * (1000 - 0) + 0)}/>
          }
        })
      }
    </div>
  )
}

export default Tab_Completed
