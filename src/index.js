import React from 'react'
import { Creatable } from 'react-select';
import 'react-select/dist/react-select.css';

export default class MultiSelect extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(selectedOptions = []) {
    this.props.setItems(selectedOptions.map(el => el.value))
  }

  render() {
    const { placeholder, clearable = true, items, selectedItems = [], disabled, showCount, setItems, translate } = this.props

    const options = items.map((option) => {
      let label = translate(option.title || option.label || option.key)
      if (showCount) label += ` (${option.doc_count}) `
      return { value: option.key, label}
    })

    return (
      <Creatable multi disabled={disabled}
        value={selectedItems}
        placeholder={placeholder}
        options={options}
        valueRenderer={(v) => translate(v.value)}
        clearable={clearable}
        onChange={this.handleChange} />
    )
  }
}
