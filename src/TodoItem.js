import React, {Component} from 'react';

class TodoItem extends Component {
  
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this)
  }

  render() {
    const {content} = this.props;
    return (
      <li 
        onClick={this.deleteItem}
      >
        {content}
      </li>
    )
  }

  deleteItem() {

    const {deleteItem, index} = this.props;
    deleteItem(index)
  }
}

export default TodoItem;