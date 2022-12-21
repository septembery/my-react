import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressIndicator, { ProgressIndicatorProps } from './ProgressIndicator';

export default {
  title: 'ProgressIndicatior',
  component: ProgressIndicator,
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args: ProgressIndicatorProps) => <ProgressIndicator {...args}/>;

export const Default = Template.bind({});
Default.args = {
  progress: 0.5
}