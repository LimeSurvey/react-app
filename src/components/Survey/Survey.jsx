import { useCallback } from 'react';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import classNames from 'classnames'
import Section from './Section'
import Card from './Card'
import QuestionGroups from './QuestionGroups'
import useSurvey from 'hooks/useSurvey'
import './Survey.scss'


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
                'survey'
            )}
        >
            <Section>
                <Card>
                    <h1>{survey.title}</h1>
                </Card>
            </Section>

            <Section>
                <QuestionGroups
                    questionGroups={survey.questionGroups}
                    update={handleUpdateQuestionGroup}
                />
            </Section>

            <Section>
                <Card>
                    <Button onClick={save}>Save</Button>
                </Card>
            </Section>
        </Col>
    )
}

export default Survey
