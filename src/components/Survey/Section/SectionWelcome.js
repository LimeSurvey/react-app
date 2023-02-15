import classNames from 'classnames'
import Button from 'react-bootstrap/Button'
import { PlusCircleFill, ThreeDots } from 'react-bootstrap-icons'
import ContentEditable from 'react-contenteditable'

import L10ns from 'components/L10ns'

import Section from '../Section'
import Card from '../Card'

const SectionWelcome = ({
    languagesettings,
    update,
    language
}) => {

    const handleUpdate = (updated) => {
        let updateData = {
            ...languagesettings
        }

        updateData[language] = {
            ...updateData[language],
            ...updated
        }

        update(updateData)
    }

    return (
        <Section>
            <Card className={classNames('welcome')}>
                <div className={classNames('image')}>
                    <PlusCircleFill /> add Image
                </div>
                <div className={classNames('right')}>
                    <div className={classNames('header')}>
                        <div className={classNames('title')}>
                            <ContentEditable
                                html={L10ns({ prop: 'title', language, l10ns: languagesettings })}
                                onChange={(e) => handleUpdate({ title: e.target.value })}
                            />
                        </div>
                        <Button variant="link">
                            <ThreeDots color={'black'} style={{ padding: 0 }} />
                        </Button>
                    </div>
                    <div className={classNames('body')}>
                        <div>
                            <h6>
                                <ContentEditable
                                    html={L10ns({ prop: 'description', language, l10ns: languagesettings })}
                                    onChange={(e) => handleUpdate({ description: e.target.value })}
                                />
                            </h6>
                            <ContentEditable
                                html={L10ns({ prop: 'welcometext', language, l10ns: languagesettings })}
                                onChange={(e) => handleUpdate({ welcometext: e.target.value })}
                            />
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
