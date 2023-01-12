import name from 'helpers/maybe'
import Input from 'components/Input'
import classNames from 'classnames'
import Questions from './Questions'
import Caption from 'components/Caption'
import Section from 'components/Survey/Section'
import Card from 'components/Survey/Card'
import { useCallback } from 'react'

const QuestionGroup = ({
    index,
    questionGroup: { name: maybeName, questions } = {},
    questionGroup,
    update,
}) => {
    const handleUpdate = useCallback((change) => {
        update({
            ...questionGroup,
            ...change,
        })
    })

    const handleUpdateInput = useCallback((value) =>
        handleUpdate({
            name: { ...questionGroup.name, en: value },
        }),
        [questionGroup]
    )

    const handleUpdateQuestions = useCallback((questions) =>
        handleUpdate({ questions })
    )

    return (
        <Section
            key={`question-group-${index}}`}
            className={classNames(
                'mb-5'
            )}
        >
            <Card>
                <Caption>Question group {index}</Caption>
                <Input
                    value={name(maybeName)}
                    label='Name (en)'
                    update={handleUpdateInput}
                />
                <Questions
                    questions={questions}
                    update={handleUpdateQuestions}
                />
            </Card>
        </Section>
    )
}

export default QuestionGroup
