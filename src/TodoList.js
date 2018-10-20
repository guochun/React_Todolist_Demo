import React, { Component } from 'react';

import store from './store/index';
import {
  getInputValueChnageAction, 
  getAddTodoItemAction,
  getDeleteTodoItemAction,
  getListInit,
} from './store/actionCreator'
import TodoListUI from './TodoListUI';

import 'antd/dist/antd.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
    
  }

  componentDidMount() {
    const action = getListInit()
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleButtonClick = {this.handleButtonClick}
        handleItemDelete = {this.handleItemDelete}
      />
    )
  }

  handleInputChange(e) {

    const action = getInputValueChnageAction(e.target.value)
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(
      store.getState()
    )
  }

  handleButtonClick() {
    const action = getAddTodoItemAction();
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteTodoItemAction(index);
    store.dispatch(action)
  }
}

export default TodoList;