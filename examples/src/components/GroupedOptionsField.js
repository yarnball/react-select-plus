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
      multi: true,
      multiValue: [{"label": "Genius", "value": "Genius"}],
      options: [ { "label": "Colours", "value": "Colours", "key": 122, "options": [ { "label": "Green", "value": "Green", "key": 2 }, { "label": "Blue", "value": "Blue", "key": 3 }, { "label": "BlahBlah", "value": "BlahBlah", "key": 4 }, { "label": "Disestablishmenterianism", "value": "Disestablishmenterianism", "key": 5 }, { "label": "MagentaMagenta", "value": "MagentaMagenta", "key": 6 }, { "label": "Orange", "value": "Orange", "key": 7 }, { "label": "TealMagentaMagenta", "value": "TealMagentaMagenta", "key": 20 }, { "label": "Violet", "value": "Violet", "key": 21 }, ] }, { "label": "Fruits", "value": "Fruits", "key": 141, "options": [ { "label": "Banana", "value": "Banana", "key": 8 }, { "label": "Apple", "value": "Apple", "key": 9 }, { "label": "Orange", "value": "Orange", "key": 10 }, { "label": "Orange", "value": "Orange", "key": 11 }, { "label": "Tomato", "value": "Tomato", "key": 12 }, { "label": "Eggplant", "value": "Eggplant", "key": 13 }, { "label": "Capsicum", "value": "Capsicum", "key": 14 }, ], }, { "label": "Planets", "value": "Planets", "key": 131, "options": [ { "label": "Earth", "value": "Earth", "key": 15 }, { "label": "Mars", "value": "Mars", "key": 16 }, { "label": "Venus", "value": "Venus", "key": 17 }, { "label": "Neptune", "value": "Neptune", "key": 18 }, { "label": "Saturn", "value": "Saturn", "key": 19 }, { "label": "Uranus", "value": "Uranus", "key": 190 } ] } ],
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
          multi={multi}
          options={options}
          onChange={this.handleOnChange.bind(this)}
          value={this.state.multiValue}
        />
    );
  }
}

module.exports = GroupedOptionsField;
