import Button from './Button'

export default {
  title: 'UI/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

const props = {
  text: 'Hello',
  onClick: () => console.log('Button click'),
  disabled: false,
  theme: 'light',
  classes: '',
}

export const Light = Template.bind({})

Light.args = {
  ...props,
  theme: 'light',
}

export const Dark = Template.bind({})

Dark.args = {
  ...props,
  theme: 'dark',
}

export const Disabled = Template.bind({})

Disabled.args = {
  ...props,
  disabled: true,
}
