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

    const handleUpdate = useCallback(
        (updatedData) => (
            update({
                ...survey,
                ...updatedData
            })
        )
        ,
        [survey, update, language]
    )

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
                languagesettings={survey?.languagesettings}
                update={(languagesettings) => handleUpdate({ languagesettings })}
            />
            <QuestionGroups
                questionGroups={survey?.questionGroups}
                update={(questionGroups) => handleUpdate({ questionGroups })}
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
