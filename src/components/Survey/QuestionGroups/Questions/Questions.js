import { useCallback } from 'react'

import Question from './Question'

const Questions = ({ language, questions = [], update }) => {
    const handleUpdate = useCallback((index, change) => {
        update([
            ...questions.slice(0, index),
            change,
            ...questions.slice(index + 1),
        ])
    },
        [questions]
    )

    return questions.map((question, index) => (
        <Question
            language={language}
            question={question}
            update={(question) => handleUpdate(index, question)}
            key={`question-${question.qid}`}
        />
    ))
}

export default Questions
