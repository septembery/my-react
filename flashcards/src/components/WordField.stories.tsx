import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import WordField from './WordField'

export default {
  title: 'WordField',
  component: WordField,
} as ComponentMeta<typeof WordField>

const Template: ComponentStory<typeof WordField> = (args: { text: string }) => (
  <WordField {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: `Test WordField text`,
}
