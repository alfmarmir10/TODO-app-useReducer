import React, { useContext, useEffect, useState } from 'react';
import '../styles/styles_base.css';
import '../styles/Body/tabs_styles.css';
import Checked from '../assets/comprobado.png';
import { TodoContext } from '../context/TodoContext';
import Delete from '../assets/delete.png';

const TaskCard = (props) => {
  const {todoGlobalState, dispatchTodoGlobalState} = useContext(TodoContext);
  const {description, itemKey, filter} =  props;
  let task;
  try {
    task = todoGlobalState.Tasks[itemKey]["Status"];
  } catch (error) {
    
  }
  const [checked, setChecked] = useState(false);
  const [statusChanged, setStatusChanged] = useState(false);

  const cardClassName = (statusChanged) ? 'width-100percent taskCard flex-row-start hideTask' : 'width-100percent taskCard flex-row-start';
  const completeBtn_ClassName = (checked) ? 'checkedIcon Visible' : 'checkedIcon';
  const task_description_ClassName = (checked) ? 'font-size-sm font-weight-300 white-space-nowrap task-description Completed' : 'font-size-sm font-weight-300 white-space-nowrap task-description';

  function completeTask(){
    if(!checked){
      setTimeout(()=>{
        dispatchTodoGlobalState({type:"CompleteTask", payload:{itemKey: itemKey}})
      },2000)
    } else {
      setTimeout(()=>{
        dispatchTodoGlobalState({type:"RestoreTask", payload:{itemKey: itemKey}})
      },2000)
    }
    setChecked(!checked);
  }

  function trashTask(){
    dispatchTodoGlobalState({type:"TrashTask", payload:{itemKey: itemKey}})
  }

  function removeTask(){
    dispatchTodoGlobalState({type:"RemoveTask", payload:{itemKey: itemKey}})
  }

  useEffect(() => {
    if(task !== undefined && task !== filter){
      setStatusChanged(true);
    }
    if(task==="Completed"){
      setChecked(true);
    }
  }, [task, filter])

  return (
    <div className={cardClassName}>
      {
        (task!=="Trash") ? (
          <div className="completed-btn-container flex-column-center" onClick={completeTask}>
            <div className="completed-btn">
              <img src={Checked} alt="Checked img" className={completeBtn_ClassName} />
            </div>
          </div>
        ) : <></>
      }
      <div className="task-description-main-container">
        <p className={task_description_ClassName}>{description}</p>
      </div>
      {
        (task!=="Trash") ? (
          <div className="delete-btn flex-column-center" onClick={trashTask}>
            <img src={Delete} alt="" className="taskCard-delete-btn-img"/>
          </div>
        ) : (
          <div className="delete-btn flex-column-center" onClick={removeTask}>
            <button className="removeBtn">Remove</button>
          </div>
        )
      }
    </div>
  )
}

export default TaskCard
