import actionType from './actionType'


function actionCreator(type) {

  
  const actionStrategy = {

    [actionType.CHANGE_INPUT_VALUE]: (value) => {
      return {
        type,
        value,
      }
    },

    [actionType.ADD_TODO_ITEM]: () => {
      return {
        type,
      }
    },

    [actionType.DELETE_TODO_ITEM]: (index) => {
        return {
          type,
          index,
        }

    },

  }

  return actionStrategy[type]
}

 export const getInputValueChnageAction = actionCreator(actionType.CHANGE_INPUT_VALUE)
 export const getAddTodoItemAction = actionCreator(actionType.ADD_TODO_ITEM)
 export const getDeleteTodoItemAction = actionCreator(actionType.DELETE_TODO_ITEM)

 
