import name from 'helpers/maybe'
import Input from 'components/Input'
import classNames from 'classnames'
import Questions from './Questions'

const QuestionGroup = ({
  questionGroup: { name: maybeName, questions } = {},
  questionGroup,
  update,
}) => {
  const handleUpdate = (change) => {
    update({
      ...questionGroup,
      ...change,
    })
  }

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
          update={(value) =>
            handleUpdate({
              name: { ...questionGroup.name, en: value },
            })
          }
        />
      </div>
      <div className='card-body'>
        <Questions
          questions={questions}
          update={(questions) => handleUpdate({ questions })}
        />
      </div>
    </div>
  )
}

export default QuestionGroup
