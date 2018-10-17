import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this)
  }

  render() {
    const {content, test} = this.props;
    return (
      <li 
        onClick={this.deleteItem}
      >
        {test} - {content}
      </li>
    )
  }

  deleteItem() {

    const {deleteItem, index} = this.props;
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func,
  test: PropTypes.string.isRequired,
}

TodoItem.defaultProps = {
  test: 'helloworld'
}

export default TodoItem;