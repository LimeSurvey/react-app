import { useCallback } from 'react'
import classNames from 'classnames'
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button'
import { PlusCircleFill, ThreeDots } from 'react-bootstrap-icons'

import useSurvey from 'hooks/useSurvey'
import L10ns from 'components/L10ns'

import Section from '../Section'
import Card from '../Card'

const SectionWelcome = () => {
    // You would normally get this via useParams from react-router-dom or via props from the parent
    const id = '78f91e52-6028-11ed-82e1-7ac846e3af9d'
    const { survey, save, update, language } = useSurvey(id)

    const languageSettings = survey?.languagesettings

    return (
        <Section>
            <Card className={classNames('welcome')}>
                <div className={classNames('image')}>
                    <PlusCircleFill /> add Image
                </div>
                <div className={classNames('right')}>
                    <div className={classNames('header')}>
                        <div className={classNames('title')}>
                            <L10ns prop="title" language={language} l10ns={languageSettings} />
                            {/*survey.title*
                            <Form.Control
                                type="text"
                                defaultValue={title}
                            />
                            */}
                        </div>
                        <Button variant="link">
                            <ThreeDots color={'black'} style={{ padding: 0 }} />
                        </Button>
                    </div>
                    <div className={classNames('body')}>
                        <div>
                            <h6>{parse(L10ns({ prop: 'description', language, l10ns: languageSettings }))}</h6>
                            {parse(L10ns({ prop: 'welcometext', language, l10ns: languageSettings }))}
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
