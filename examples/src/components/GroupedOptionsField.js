import React from 'react';
import Select from 'react-select-plus';

class GroupedOptionsField extends React.Component {
  static propTypes: {
    label: React.PropTypes.string,
  }
  constructor(props) {
    super(props);
    // this.handleOnChange = this.handleOnChange.bind(this);
    // Do this, or will get a "not defined" error. Also
    this.state = {
      multiValue: [{"label": "Geniu", "value": "Genius"}],
      options: [{
  label: 'Primary Colors',
  options: [{
    label: 'Yellow',
    value: 'yellow'
  }, {
    label: 'Red',
    value: 'red'
  }, {
    label: 'Blue',
    value: 'blue'
  }]
}, {
  label: 'Secondary Colors',
  options: [{
    label: 'Orange',
    value: 'orange'
  }, {
    label: 'Green',
    value: 'green'
  }]
}],
    };
  }
  handleOnChange (value) {
    // const { multi } = this.state;
    this.setState({ multiValue: value });
    console.log('this is new', value)
  }
  render () {
    const { multi, multiValue, options } = this.state;
    return (
        <Select.Creatable
          multi={true}
          showNewOptionAtTop={true}
          options={options}
          onChange={this.handleOnChange.bind(this)}
          value={this.state.multiValue}
        />
    );
  }
}

// .Select-option-group-label ~ .Select-option{
//   display:-webkit-inline-box;
// }

module.exports = GroupedOptionsField;