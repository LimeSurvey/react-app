import { useCallback } from 'react'
import classNames from 'classnames'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import useSurvey from 'hooks/useSurvey'

import Section from './Section'
import Card from './Card'
import SectionWelcome from './Section/SectionWelcome'
import SectionThankyou from './Section/SectionThankyou'
import QuestionGroups from './QuestionGroups'
import './Survey.scss'

const Survey = () => {
    // You would normally get this via useParams from react-router-dom or via props from the parent
    const id = '78f91e52-6028-11ed-82e1-7ac846e3af9d'
    const { survey, save, update, language } = useSurvey(id)

    const handleUpdateQuestionGroups = useCallback((questionGroups) =>
        update({
            ...survey,
            ...questionGroups,
        }),
        [survey]
    )

    const handleUpdateLanguagesettings = useCallback((languagesettings) => (
        update({
            ...survey,
            ...languagesettings,
        }),
        [survey]
    ))

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
            <SectionWelcome
                language={language}
                languagesettings={survey.languagesettings}
                update={handleUpdateLanguagesettings}
            />
            <QuestionGroups
                questionGroups={survey.questionGroups}
                update={handleUpdateQuestionGroups}
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
