import { useCallback } from 'react'
import classNames from 'classnames'
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button'
import { PlusCircleFill, ThreeDots } from 'react-bootstrap-icons'

import L10ns from 'components/L10ns'

import InputEditable from '../InputEditable'
import Section from '../Section'
import Card from '../Card'

const SectionWelcome = ({ languagesettings, update, language }) => {

    const handleUpdate = useCallback((updatedSettings) => {
        if (languagesettings?.[language]) {
            let updateData = {
                ...languagesettings
            }

            updateData[language] = {
                ...updateData[language],
                ...updatedSettings
            }

            update(updateData)
        }
    }, [languagesettings, update, language])

    return (
        <Section>
            <Card className={classNames('welcome')}>
                <div className={classNames('image')}>
                    <PlusCircleFill /> add Image
                </div>
                <div className={classNames('right')}>
                    <div className={classNames('header')}>
                        <div className={classNames('title')}>
                            <InputEditable
                                type="text"
                                value={L10ns({ prop: 'title', language, l10ns: languagesettings })}
                                update={(value) => handleUpdate({ title: value })}
                            />
                        </div>
                        <Button variant="link">
                            <ThreeDots color={'black'} style={{ padding: 0 }} />
                        </Button>
                    </div>
                    <div className={classNames('body')}>
                        <div>
                            <h6>
                                <InputEditable
                                    type="text" as="textarea" rows={4}
                                    value={L10ns({ prop: 'description', language, l10ns: languagesettings })}
                                    displayValue={parse(L10ns({ prop: 'description', language, l10ns: languagesettings }))}
                                    update={(value) => handleUpdate({ description: value })}
                                />
                            </h6>
                            <InputEditable
                                type="text" as="textarea" rows={4}
                                value={L10ns({ prop: 'welcometext', language, l10ns: languagesettings })}
                                displayValue={parse(L10ns({ prop: 'welcometext', language, l10ns: languagesettings }))}
                                update={(value) => handleUpdate({ welcometext: value })}
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
