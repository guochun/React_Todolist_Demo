import React, {Component, Fragment} from 'react';
import {CSSTransition} from 'react-transition-group'
import './App.css'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.handleShow = this.handleShow.bind(this);
  }

  render() {
    return(
      <Fragment>
        <CSSTransition
          in={this.state.isShow}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleShow}>toggle</button>
      </Fragment>  
    )
  }

  handleShow() {
    let isShow = !this.state.isShow
    this.setState( () => (
      {
        isShow,
      }
    ))
  }
}

export default App;