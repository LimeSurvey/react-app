import parse from 'html-react-parser';
import Input from 'components/Input'
import classNames from 'classnames'
import Questions from './Questions'
import Caption from 'components/Caption'
import Section from 'components/Survey/Section'
import Card from 'components/Survey/Card'
import L10ns from 'components/L10ns'

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

    const nameLocal = L10ns({ l10ns: questionGroup.l10ns, prop: 'group_name', lang: 'en' });
    const descriptionLocal = L10ns({ l10ns: questionGroup.l10ns, prop: 'description', lang: 'en' });

    return (
        <Section className={classNames('mb-5')}>
            <Card>
                <h2>{nameLocal}</h2>
                <p>{parse(descriptionLocal)}</p>
                {/*
                <Caption>Question group {index}</Caption>
                <Input
                    value={nameLocal}
                    label='Name (en)'
                    update={handleUpdateInput}
                />
                */}
                <Questions
                    questions={questions}
                    update={handleUpdateQuestions}
                />
            </Card>
        </Section>
    )
}

export default QuestionGroup
