import { useCallback } from 'react'
import parse from 'html-react-parser';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import Section from '../Section'
import Card from '../Card'
import useSurvey from 'hooks/useSurvey'

const SectionWelcome = () => {
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

    const language = survey && survey.language ? survey.language : null

    return (
        <Section>
            <Card className={classNames('welcome')}>
                <div className={classNames('image')}>
                    <Icon.PlusCircleFill /> add Image
                </div>
                <div className={classNames('right')}>
                    <div className={classNames('header')}>
                        <div className={classNames('title')}>
                            {survey && survey.defaultlanguage ? survey.defaultlanguage.title : ''}
                            {/*survey.title*
                            <Form.Control
                                type="text"
                                defaultValue={survey && survey.defaultlanguage ? survey.defaultlanguage.title : ''}
                            />
                            */}
                        </div>
                        <Button variant="link">
                            <Icon.ThreeDots color={'black'} style={{ padding: 0 }} />
                        </Button>
                    </div>
                    <div className={classNames('body')}>
                        <div>
                            <h6>{parse(survey && survey.defaultlanguage ? survey.defaultlanguage.description : '')}</h6>
                            {parse(survey && survey.defaultlanguage ? survey.defaultlanguage.welcometext : '')}
                        </div>
                        <div>
                            <Button variant="outline-secondary">Start</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Section>
    )
}

export default SectionWelcome
