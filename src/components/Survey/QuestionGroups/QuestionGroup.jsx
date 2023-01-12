import name from 'helpers/maybe'
import Input from 'components/Input'
import classNames from 'classnames'
import Questions from './Questions'
import Caption from 'components/Caption'
import Section from 'components/Survey/Section'
import Card from 'components/Survey/Card'

const QuestionGroup = ({
    index,
    questionGroup: { name: maybeName, questions } = {},
    questionGroup,
    update,
}) => {
    const handleUpdate = (change) => {
        update({
            ...questionGroup,
            ...change,
        })
    }

    const handleUpdateInput = (value) =>
        handleUpdate({
            name: { ...questionGroup.name, en: value },
        })

    const handleUpdateQuestions = (questions) =>
        handleUpdate({ questions })

    return (
        <Section className={classNames('mb-5')}>
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
