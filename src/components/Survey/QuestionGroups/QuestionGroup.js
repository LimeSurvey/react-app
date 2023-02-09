import parse from 'html-react-parser';
import classNames from 'classnames'

import Section from 'components/Survey/Section'
import Card from 'components/Survey/Card'
import L10ns from 'components/L10ns'

import Questions from './Questions'

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

    const nameLocal = L10ns({ l10ns: questionGroup.l10ns, prop: 'group_name', language: 'en' });
    const descriptionLocal = L10ns({ l10ns: questionGroup.l10ns, prop: 'description', language: 'en' });

    return (
        <Section>
            <Card>
                <div className={classNames('header')}>
                    <div className={classNames('title', 'flex-grow-1')}>{nameLocal}</div>
                </div>

                {/*
                <Caption>Question group {index}</Caption>
                <Input
                    value={nameLocal}
                    label='Name (en)'
                    update={handleUpdateInput}
                />
                */}
                <div className={classNames('body')}>
                    <div>{parse(descriptionLocal)}</div>
                    <Questions
                        questions={questions}
                        update={handleUpdateQuestions}
                    />
                </div>
            </Card>
        </Section>
    )
}

export default QuestionGroup
