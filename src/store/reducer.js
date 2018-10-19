import actionType from './actionType'


const defaultState = {
  inputValue: '',
  list: [],
}

export default (state = defaultState, action) => {

  if(action.type === actionType.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;

  }

  if(action.type ===  actionType.ADD_TODO_ITEM) {
    if(state.inputValue.length <= 0) return;
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue)
    newState.inputValue = '';
    return newState;
  }

  if(action.type === actionType.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState;
  }
  return state;
}