import { Fragment, useCallback } from 'react'
import classNames from 'classnames'
import Questions from './Questions'
import L10ns from 'components/L10ns'

const Question = ({
    question: {
        name: maybeName,
        type = '',
        helpText: maybeHelptext,
        subquestions = [],
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

    const handleUpdateSubquestions = useCallback((subquestions) =>
        handleUpdate({ subquestions })
    )

    const textLocal = L10ns({ l10ns: question.l10ns, prop: 'question', lang: 'en' });

    return (
        <div className={classNames('question')} key={`question-${question.id}`}>
            <h1>{textLocal}</h1>
            {/*
            <Input
                value={maybe(maybeName)}
                label='Name (en)'
                update={(value) =>
                    handleUpdate({
                        name: { ...question.name, en: value },
                    })
                }
            />
            <Input
                value={type}
                label='Type'
                update={(value) =>
                    handleUpdate({
                        type: value,
                    })
                }
            />
            <Input
                value={maybe(maybeHelptext)}
                label='Help text (en)'
                update={(value) =>
                    handleUpdate({
                        helpText: { ...question.helpText, en: value },
                    })
                }
            />
            */}
            <Questions
                questions={subquestions}
                update={handleUpdateSubquestions}
            />
        </div>
    )
}

export default Question
