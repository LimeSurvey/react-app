import { useCallback } from 'react';
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import classNames from 'classnames'
import Section from '../Section'
import Card from '../Card'
import useSurvey from 'hooks/useSurvey'

const SectionWelcome = () => {

    return (
        <Section>
            <Card className={classNames('thankyou')}>
                <div className={classNames('image')}>
                    <Icon.PlusCircleFill /> add Image
                </div>
                <div className={classNames('right')}>
                    <div className={classNames('header')}>
                        <div className={classNames('title')}>
                            Thank you
                        </div>
                        <Button variant="link">
                            <Icon.ThreeDots color={'black'} style={{ padding: 0 }} />
                        </Button>
                    </div>
                    <div className={classNames('body')}>
                        <div></div>
                        <div>
                            <Button variant="outline-secondary">Send Survey</Button>
                        </div>
                    </div>
                </div>
            </Card>
        </Section>
    )
}

export default SectionWelcome
