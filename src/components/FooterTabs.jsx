import React, { useContext } from 'react'
import '../styles/styles_base.css';
import '../styles/Body/footer-tabs-styles.css';
import { TodoContext } from '../context/TodoContext';

const FooterTabs = (props) => {
  const { todoGlobalState, dispatchTodoGlobalState } = useContext(TodoContext);

  let pendingClassName = (todoGlobalState.TabName === "Pending") ? 'tab active flex-column-center' : 'tab flex-column-center';
  let completedClassName = (todoGlobalState.TabName === "Completed") ? 'tab active flex-column-center' : 'tab flex-column-center';
  let trashClassName = (todoGlobalState.TabName === "Trash") ? 'tab active flex-column-center' : 'tab flex-column-center';

  function dispatchPending(){
    dispatchTodoGlobalState({type:"Pending"});
  }
  
  function dispatchCompleted(){
    dispatchTodoGlobalState({type:"Completed"});
  }
  
  function dispatchTrash(){
    dispatchTodoGlobalState({type:"Trash"});
  }

  return (
    <div className="width-100percent tabs-main-container flex-row-start">
      <div className={pendingClassName} onClick={dispatchPending}>
        <p className="font-size-sm">Pending</p>
      </div>
      <div className={completedClassName} onClick={dispatchCompleted}>
        <p className="font-size-sm">Completed</p>
      </div>
      <div className={trashClassName} onClick={dispatchTrash}>
        <p className="font-size-sm">Trash</p>
      </div>
    </div>
  )
}

export default FooterTabs
