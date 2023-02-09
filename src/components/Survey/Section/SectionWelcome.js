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

    const updateL10ns = useCallback((updatedSettings) => {
        Object.keys(updatedSettings).forEach(key => {
            languagesettings[language][key] = updatedSettings[key]
            update(languagesettings)
        })
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
                                update={(value) => updateL10ns({ title: value })}
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
                                    type="text"
                                    value={L10ns({ prop: 'description', language, l10ns: languagesettings })}
                                    displayValue={parse(L10ns({ prop: 'description', language, l10ns: languagesettings }))}
                                    update={(value) => updateL10ns({ description: value })}
                                />
                            </h6>
                            <InputEditable
                                type="text"
                                value={L10ns({ prop: 'welcometext', language, l10ns: languagesettings })}
                                displayValue={parse(L10ns({ prop: 'welcometext', language, l10ns: languagesettings }))}
                                update={(value) => updateL10ns({ welcometext: value })}
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
