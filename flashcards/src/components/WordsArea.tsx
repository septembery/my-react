import { WordProps } from '../types/WordProps'
import WordField from './WordField'
import WordExampleField from './WordExampleField'

function WordsArea(props: { word: WordProps }) {
  return (
    <>
      <WordField text={props.word.eng} />
      <WordField text={props.word.pol} />
      <WordExampleField text={props.word?.example?.eng} />
      <WordExampleField text={props.word?.example?.pol} />
    </>
  )
}

export default WordsArea
