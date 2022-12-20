import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WordsArea from './WordsArea';
import { WordProps } from '../types/WordProps';

export default {
  title: 'WordsArea',
  component: WordsArea,
} as ComponentMeta<typeof WordsArea>;

const Template: ComponentStory<typeof WordsArea> = (args: {word: WordProps}) => <WordsArea {...args}/>;

export const Default = Template.bind({});
Default.args = {
  word: {
    eng: 'test eng',
    pol: 'test pol',
    example: {
      eng: 'test eng example',
      pol: 'test pol example'
    }
  }
};

export const WithoutExamples = Template.bind({});
WithoutExamples.args = {
  word: {
    eng: 'test eng',
    pol: 'test pol',
  }
};