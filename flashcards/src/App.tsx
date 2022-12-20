import React, { Component } from 'react';
import ProgressIndicator from './components/ProgressIndicator'
import ActionButton from './components/ActionButton';
import WordsArea from './components/WordsArea';

import { WordProps } from './types/WordProps';
import { runInThisContext } from 'vm';

class App extends Component<
  {
    wordList: WordProps[]
  },
  {
    history: number[],
    index: number,
    toRemind: number[],
    progress: number
  }>
{
  wordList: WordProps[];

  constructor(props: any) {
      super(props);
      this.wordList = props.wordList;
      this.state = {
          history: [],
          index: 0,
          toRemind: [],
          progress: 0
      };

      this.handleForwardClick = this.handleForwardClick.bind(this);
      this.handleRemindClick = this.handleRemindClick.bind(this);
  }

  handleForwardClick() {
    this.setState((state) => {
      console.log(state.history)
      return {
        history: [...state.history, state.index],
        index: this.getRandom(0, this.wordList.length - 1),
        toRemind: state.toRemind,
        progress: this.incrementProgress(this.wordList.length)
      };
    });
  }

  handleRemindClick() {
    // this.setState((state) => {
    //   return {
    //     toRemind: [... state.toRemind, state.counter],
    //     counter: this.incrementCounter(this.wordList.length, state.counter),
    //     progress: state.progress
    //   };
    // });
  }

  getRandom(min: number, max: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    console.log(this.state.history.includes(randomNumber))
    console.log(randomNumber)

    if (this.state.history.includes(randomNumber)) { this.getRandom(min, max) }

    

    return randomNumber;
  }

  incrementProgress(length: number): number {
    const counter = this.state.history.length + this.state.toRemind.length;
    return (length - 1 > counter) ? counter + 1 / length : 1;
  }

  render() {
    return (
      <>
        <WordsArea word={this.wordList[this.state.index]} />
        <ActionButton label='OK' handleClick={this.handleForwardClick} />
        <ActionButton label='remind' handleClick={this.handleRemindClick} />
        <ProgressIndicator progress={this.state.progress} />
      </>
    );
  }
}

export default App;
