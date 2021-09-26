import React, {createContext, useReducer} from 'react';

const initialState = {
  TabName: "Pending",
  Tasks:{
    20210924155810124:{
      Description: "Buy Milk",
      Status: "Pending"
    }
  }
};
const TodoContext = createContext(initialState);
const { Provider } = TodoContext;

const TodoContextProvider = ({children}) => {
  const [todoGlobalState, dispatchTodoGlobalState] = useReducer((state, action) =>{
    let idItem;
    try {
      idItem = action.payload.itemKey;
    } catch (error) {
      
    }
    switch(action.type){
      case "Pending":
        return {
          ...state, TabName: "Pending"
        }
      case "Completed":
        return {
          ...state, TabName: "Completed"
        }
      case "Trash":
        return {
          ...state, TabName: "Trash"
        }
      case "AddTask":
        return {
          ...state,
          Tasks:{
            ...state.Tasks,
            [idItem] : {
              Description: action.payload.Description,
              Status: action.payload.Status
            }
          }
        };
      case "CompleteTask":
        return {
          ...state,
          Tasks:{
            ...state.Tasks,
            [idItem] : {
              ...state.Tasks[idItem],
              Status: "Completed"
            }
          }
        };
      case "TrashTask":
        return {
          ...state,
          Tasks:{
            ...state.Tasks,
            [idItem] : {
              ...state.Tasks[idItem],
              Status: "Trash"
            }
          }
        };
      case "RestoreTask":
        return {
          ...state,
          Tasks:{
            ...state.Tasks,
            [idItem] : {
              ...state.Tasks[idItem],
              Status: "Pending"
            }
          }
        }
      case "RemoveTask":
        return {
          ...state,
          Tasks:{
            ...state.Tasks,
            [idItem] : {
              ...state.Tasks[idItem],
              Status: "Removed"
            }
          }
        }
      default:
        return ""
    }
  }, initialState);
  
  return (
    <Provider value={{
      todoGlobalState,
      dispatchTodoGlobalState
    }}>{children}</Provider>
  )
}

export {TodoContext, TodoContextProvider}
