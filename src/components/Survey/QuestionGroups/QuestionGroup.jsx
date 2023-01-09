import name from 'helpers/maybe'
import Input from 'components/Input'
import classNames from 'classnames'
import Questions from './Questions'
import { useCallback } from 'react'

const QuestionGroup = ({
  questionGroup: { name: maybeName, questions } = {},
  questionGroup,
  update,
}) => {
  const handleUpdate = useCallback((change) => {
    update({
      ...questionGroup,
      ...change,
    })
  })

  const handleUpdateInput = useCallback((value) =>
    handleUpdate({
      name: { ...questionGroup.name, en: value },
    }),
    [questionGroup]
  )

  const handleUpdateQuestions = useCallback((questions) =>
    handleUpdate({ questions })
  )

  return (
    <div
      className={classNames(
        'mb-5'
      )}
    >
      <div className='card-header'>
        <Input
          value={name(maybeName)}
          label='Name (en)'
          update={handleUpdateInput}
        />
      </div>
      <div className='card-body'>
        <Questions
          questions={questions}
          update={handleUpdateQuestions}
        />
      </div>
    </div>
  )
}

export default QuestionGroup
