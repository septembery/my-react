import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import WordExampleField from './WordExampleField'

export default {
  title: 'WordExampleField',
  component: WordExampleField,
} as ComponentMeta<typeof WordExampleField>

const Template: ComponentStory<typeof WordExampleField> = (args: {
  text: string | undefined
}) => <WordExampleField {...args} />

export const Default = Template.bind({})
Default.args = {
  text: `Test long test for WordExampleField
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur`,
}
