import { useCallback } from 'react'
import classNames from 'classnames'

import L10ns from 'components/L10ns'

import InputEditable from '../../InputEditable'
import Questions from './Questions'

const Question = ({
    language,
    question: {
        l10ns = {},
        subquestions = []
    } = {},
    question,
    update,
}) => {
    const handleUpdate = useCallback((change) => {
        update({
            ...question,
            ...change,
        })
    },
        [question]
    )

    const handleUpdateL10ns = useCallback((updated) => {
        if (question?.l10ns?.[language]) {
            let updateL10ns = {
                ...question.l10ns
            }

            updateL10ns[language] = {
                ...updateL10ns[language],
                ...updated
            }

            handleUpdate({ l10ns: updateL10ns })
        }
    }, [question, handleUpdate, language])

    const handleUpdateSubquestions = useCallback((subquestions) =>
        handleUpdate({ subquestions })
    )

    return (
        <div className={classNames('question')} key={`question-${question.id}`}>
            <h1>
                <InputEditable
                    type="text" as="textarea" rows={2}
                    value={L10ns({ prop: 'question', language, l10ns: question.l10ns })}
                    update={(value) => handleUpdateL10ns({ question: value })}
                />
            </h1>
            <Questions
                questions={subquestions}
                update={handleUpdateSubquestions}
            />
        </div>
    )
}

export default Question
