import React, { Component } from 'react';
import ProgressIndicator from './components/ProgressIndicator'
import ActionButton from './components/ActionButton';
import WordsArea from './components/WordsArea';

import { WordProps } from './types/WordProps';

class App extends Component<
  {
    wordList: WordProps[]
  },
  {
    counter: number,
    wordList: WordProps[],
    toRemind: number[],
    progress: number
  }>
{
  constructor(props: any) {
      super(props);
      this.state = {
          wordList: props.wordList,
          toRemind: [],
          counter: 0,
          progress: 0
      };

      this.handleForwardClick = this.handleForwardClick.bind(this);
      this.handleRemindClick = this.handleRemindClick.bind(this);
  }

  handleForwardClick() {
    this.setState((state) => {
      console.log(state.counter);
      return {
        wordList: state.wordList,
        toRemind: state.toRemind,
        counter: this.incrementCounter(state.wordList.length, state.counter),
        progress: this.incrementProgress(state.wordList.length, state.counter)
      };
    });
  }

  incrementCounter(length: number, counter: number): number {
    return (length - 1 > counter) ? counter + 1 : counter;
  };

  incrementProgress(length: number, counter: number): number {
    return (length - 1 > counter) ? counter + 1 / length : 1;
  }

  handleRemindClick() {
    // this.setState((prev) => ({
    //   wordList: prev.wordList,
    //   toRemind: [... prev.toRemind]
    // }));
  }

  render() {
    return (
      <>
        <WordsArea word={this.state.wordList[this.state.counter]} />
        <ActionButton label='OK' handleClick={this.handleForwardClick} />
        <ActionButton label='remind' handleClick={this.handleRemindClick} />
        <ProgressIndicator progress={this.state.progress} />
      </>
    );
  }
}

export default App;
