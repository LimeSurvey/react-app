import { useCallback } from 'react'
import classNames from 'classnames'
import ContentEditable from 'react-contenteditable'

import L10ns from 'components/L10ns'

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
    const handleUpdate = (change) => {
        update({
            ...question,
            ...change,
        })
    }

    const handleUpdateL10ns = (updated) => {
        let updateL10ns = {
            ...l10ns
        }

        updateL10ns[language] = {
            ...updateL10ns[language],
            ...updated
        }

        handleUpdate({ l10ns: updateL10ns })
    }

    const handleUpdateSubquestions = useCallback((subquestions) =>
        handleUpdate({ subquestions })
    )

    return (
        <div className={classNames('question')} key={`question-${question.id}`}>
            <h1>
                <ContentEditable
                    html={L10ns({ prop: 'question', language, l10ns })}
                    onChange={(e) => handleUpdateL10ns({ question: e.target.value })}
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
