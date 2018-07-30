import { withFormsy } from 'formsy-react';
import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    return (
        <input
          onChange={this.changeValue}
          type="text"
          value={this.props.getValue() || ''}
        />
    );
  }
}

export default withFormsy(Input);