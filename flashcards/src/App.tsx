import React, { Component } from 'react'
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator'
import ActionButton from './components/ActionButton'
import WordsArea from './components/WordsArea'
import { WordProps } from './types/WordProps'
import { getRandom, incrementProgress } from './App.utils'

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
  maxIndex: number

  constructor(props: any) {
    super(props)
    this.wordList = props.wordList
    this.maxIndex = props.wordList.length - 1

    this.state = {
      index: 0,
      progress: 0,
      history: [],
      toRemind: [],
    }

    this.handleRemindClick = this.handleRemindClick.bind(this)
    this.handleForwardClick = this.handleForwardClick.bind(this)
    this.handleRestartClick = this.handleRestartClick.bind(this)
  }

  componentDidMount(): void {
    this.setInitalState()
  }

  setInitalState() {
    const index = getRandom([], 0, this.maxIndex)
    const progress = 0
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
        const index = getRandom(state.history, 0, this.maxIndex)
        const progress = incrementProgress(
          state.history.length + state.toRemind.length,
          this.wordList.length
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
    this.setInitalState()
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
