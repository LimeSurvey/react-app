import { useCallback } from 'react';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import Section from './Section'
import Card from './Card'
import SectionWelcome from './Section/SectionWelcome'
import SectionThankyou from './Section/SectionThankyou'
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
                'mx-4',
                'flex-column',
                'justify-content-center',
                'survey'
            )}
        >
            <SectionWelcome/>

            <QuestionGroups
                questionGroups={survey.questionGroups}
                update={handleUpdateQuestionGroup}
            />

            <SectionThankyou/>

            <Section>
                <Card>
                    <div className={classNames('body')}>
                        <Button onClick={save}>Save</Button>
                    </div>
                </Card>
            </Section>
        </Col>
    )
}

export default Survey
