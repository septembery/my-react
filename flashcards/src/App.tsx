import React, { Component } from 'react';
import ActionButton from './components/ActionButton';
import WordsArea from './components/WordsArea';
import { WordProps } from './types/WordProps';

class App extends Component<{wordList: WordProps[]}, {wordList: WordProps[], toRemind: WordProps[] | []}> {
  constructor(props: any) {
      super(props);
      this.state = {
          wordList: props.wordList,
          toRemind: []
      };

      this.handleForwardClick = this.handleForwardClick.bind(this);
      this.handleRemindClick = this.handleRemindClick.bind(this);
  }

  handleForwardClick() {
    console.log('forwardClick');
  }

  handleRemindClick() {
    console.log('remindClick');
  }

  render() {
    return (
      <>
        <WordsArea word={this.state.wordList[0]} />
        <ActionButton label='OK' handleClick={this.handleForwardClick} />
        <ActionButton label='remind' handleClick={this.handleRemindClick} />
      </>
    );
  }
}

export default App;
