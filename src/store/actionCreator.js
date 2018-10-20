import actionType from './actionType'
import axios from 'axios'

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
    [actionType.INIT_TODO_LIST]: (data) => {
      return {
        type,
        data,
      }
    },
    [actionType.GET_LIST_INIT]: () => {
      return {
        type,
      }
    }

  }

  return actionStrategy[type]
}

export const getInputValueChnageAction = actionCreator(actionType.CHANGE_INPUT_VALUE)
export const getAddTodoItemAction = actionCreator(actionType.ADD_TODO_ITEM)
export const getDeleteTodoItemAction = actionCreator(actionType.DELETE_TODO_ITEM)
export const getInitTodoListAction = actionCreator(actionType.INIT_TODO_LIST)
export const getListInit = actionCreator(actionType.GET_LIST_INIT)

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist')
      .then((res) => {
        const data = res.data
        const action = getInitTodoListAction(data)
        dispatch(action)

      })
      .catch((ex) => {
        console.error(ex)
      })
  }
}
