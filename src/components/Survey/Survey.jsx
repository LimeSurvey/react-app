import { useCallback } from 'react';
import Col from 'react-bootstrap/Col'
import classNames from 'classnames'
import useSurvey from 'hooks/useSurvey'
import QuestionGroups from './QuestionGroups'
import Button from 'react-bootstrap/Button'

const Survey = () => {
  // You would normally get this via useParams from react-router-dom or via props from the parent
  const id = '78f91e52-6028-11ed-82e1-7ac846e3af9d'
  const { survey, save, update } = useSurvey(id)

  const handleUpdate = useCallback((questionGroups) =>
    update({
      ...survey,
      ...questionGroups,
    }),
    [survey]
  )

  const handleUpdateQuestionGroup = useCallback((questionGroups) => {
    handleUpdate({ questionGroups })
  })

  return (
    <Col
      className={classNames(
        'd-flex',
        'flex-column',
        'justify-content-center',
        'p-2',
        'm-1'
      )}
    >
      <h1>{survey.title}</h1>
      <QuestionGroups
        questionGroups={survey.questionGroups}
        update={handleUpdateQuestionGroup}
      />
      <Button onClick={save}>Save</Button>
    </Col>
  )
}

export default Survey
