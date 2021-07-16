import { useState } from 'react'
import Input from './Input'

export default {
  title: 'UI/Input',
  component: Input,
}

const Template = (arg) => {
  const [value, setValue] = useState('')

  const handleInputChange = (value) => {
    setValue(value)
  }

  return <Input {...arg} value={value} handleInputChange={handleInputChange} />
}

const props = {
  value: '',
  handleInputChange: () => console.log('Input Change'),
  placeholder: 'Placeholder',
  classes: '',
}

export const Default = Template.bind({})
Default.args = {
  ...props,
}
