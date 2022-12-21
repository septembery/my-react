import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ActionButton, { ActionButtonProps } from './ActionButton'

export default {
  title: 'ActionButton',
  component: ActionButton,
} as ComponentMeta<typeof ActionButton>

const Template: ComponentStory<typeof ActionButton> = (
  args: ActionButtonProps
) => <ActionButton {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Test label',
  handleClick: () => console.log('Click test'),
}
