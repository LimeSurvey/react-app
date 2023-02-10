import { useCallback } from 'react'
import parse from 'html-react-parser';
import classNames from 'classnames'

import Section from 'components/Survey/Section'
import Card from 'components/Survey/Card'
import L10ns from 'components/L10ns'

import InputEditable from '../InputEditable'
import Questions from './Questions'

const QuestionGroup = ({
    index,
    language,
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

    const handleUpdateL10ns = useCallback((updated) => {
        if (questionGroup?.l10ns?.[language]) {
            let updateL10ns = {
                ...questionGroup.l10ns
            }

            updateL10ns[language] = {
                ...updateL10ns[language],
                ...updated
            }

            handleUpdate({ l10ns: updateL10ns })
        }
    }, [questionGroup, handleUpdate, language])

    const handleUpdateQuestions = (questions) =>
        handleUpdate({ questions })

    const descriptionLocal = L10ns({ l10ns: questionGroup.l10ns, prop: 'description', language: 'en' });

    return (
        <Section>
            <Card>
                <div className={classNames('header')}>
                    <div className={classNames('title', 'flex-grow-1')}>
                        <InputEditable
                            type="text" as="textarea" rows={2}
                            value={L10ns({ prop: 'group_name', language, l10ns: questionGroup.l10ns })}
                            update={(value) => handleUpdateL10ns({ group_name: value })}
                        />
                    </div>
                </div>
                <div className={classNames('body')}>
                    <div>
                        <InputEditable
                            type="text" as="textarea" rows={4}
                            value={L10ns({ prop: 'description', language, l10ns: questionGroup.l10ns })}
                            displayValue={parse(L10ns({ prop: 'description', language, l10ns: questionGroup.l10ns }))}
                            update={(value) => handleUpdateL10ns({ description: value })}
                        />
                    </div>
                    <Questions
                        language={language}
                        questions={questions}
                        update={handleUpdateQuestions}
                    />
                </div>
            </Card>
        </Section>
    )
}

export default QuestionGroup
