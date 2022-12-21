import React, { Component } from 'react'
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator'
import ActionButton from './components/ActionButton'
import WordsArea from './components/WordsArea'
import { WordProps } from './types/WordProps'

class App extends Component<
  {
    wordList: WordProps[]
  },
  {
    index: number
    progress: number
    history: number[]
    toRemind: number[]
  }
> {
  wordList: WordProps[]

  constructor(props: any) {
    super(props)
    this.wordList = props.wordList

    this.state = {
      index: this.getRandom([], 0, this.wordList.length - 1),
      progress: 0,
      history: [],
      toRemind: [],
    }

    this.handleRemindClick = this.handleRemindClick.bind(this)
    this.handleForwardClick = this.handleForwardClick.bind(this)
    this.handleRestartClick = this.handleRestartClick.bind(this)
  }

  setInitalState() {
    const index = this.getRandom([], 0, this.wordList.length - 1)
    const progress = this.incrementProgress(0, this.wordList.length - 1)
    const history = [index]
    const toRemind: number[] = []

    this.setState({
      index,
      progress,
      history,
      toRemind,
    })
  }

  handleForwardClick() {
    this.setState(state => {
      if (this.state.progress < 1) {
        const index = this.getRandom(state.history, 0, this.wordList.length - 1)
        const progress = this.incrementProgress(
          state.history.length + state.toRemind.length,
          this.wordList.length - 1
        )

        return {
          index,
          progress,
          toRemind: state.toRemind,
          history: [...state.history, index],
        }
      }
    })
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

  handleRestartClick() {
    this.setState({
      index: this.getRandom([], 0, this.wordList.length - 1),
      progress: 0,
      history: [],
      toRemind: [],
    })
  }

  getRandom(history: number[], min: number, max: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    if (!history.includes(randomNumber)) {
      return randomNumber
    }

    return this.getRandom(history, min, max)
  }

  incrementProgress(counter: number, length: number): number {
    // let counter = this.state.history.length + this.state.toRemind.length;
    const progress = length > counter ? counter++ / length : 1

    return progress
  }

  render() {
    return (
      <>
        <WordsArea word={this.wordList[this.state.index]} />
        <ActionButton label="OK" handleClick={this.handleForwardClick} />
        <ActionButton label="remind" handleClick={this.handleRemindClick} />
        <ActionButton label="restart" handleClick={this.handleRestartClick} />
        <ProgressIndicator progress={this.state.progress} />
      </>
    )
  }
}

export default App
