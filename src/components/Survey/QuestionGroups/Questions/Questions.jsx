import { Fragment, useCallback } from 'react'
import Caption from 'components/Caption'
import Question from './Question'

const Questions = ({ questions = [], update }) => {
  const handleUpdate = useCallback((index, change) => {
      update([
        ...questions.slice(0, index),
        change,
        ...questions.slice(index + 1),
      ])
    },
    [questions]
  )

  return questions.map((question, index) => (
    <Fragment key={`question-${question.id}`}>
      <Question
        question={question}
        update={(question) => handleUpdate(index, question)}
      />
    </Fragment>
  ))
}

export default Questions
