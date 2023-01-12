import { useCallback } from 'react';
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

    return (
        <Section>
            <Card className={classNames('welcome')}>
                <div className={classNames('image')}></div>
                <div className={classNames('right')}>
                    <div className={classNames('header')}>
                        <div className={classNames('title')}>
                            {survey.title}
                        </div>
                        <Button variant="link">
                            <Icon.ThreeDots color={'black'} style={{ padding: 0 }} />
                        </Button>
                    </div>
                </div>
            </Card>
        </Section>
    )
}

export default SectionWelcome
