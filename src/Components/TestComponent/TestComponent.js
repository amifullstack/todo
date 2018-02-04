import React, { Component } from 'react';

class TestComponent extends Component {
  constructor(props) {
    super(props);   
  }

  render() {
    return(
      <div>
        <p>This is React and app name: {this.props.name}</p>
        {this.props.showCount ? <p>{this.props.count}</p>: null}
      </div>
    )
  }
}

export default TestComponent;