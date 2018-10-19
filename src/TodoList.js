import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store/index';
import {
  getInputValueChnageAction, 
  getAddTodoItemAction,
  getDeleteTodoItemAction
} from './store/actionCreator'

import 'antd/dist/antd.css';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    store.subscribe(this.handleStoreChange)
    
  }

  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder='todo info'
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.handleInputChange}
          />
          <Button 
            type='primary'
            onClick={this.handleButtonClick}
          >
            提交
          </Button>
        </div>
        <List
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick = { this.handleItemDelete.bind(this, index) }>{item}</List.Item>)}
        />
      </div>
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

  handleButtonClick(e) {
    const action = getAddTodoItemAction();
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteTodoItemAction(index);
    store.dispatch(action)
  }
}

export default TodoList;