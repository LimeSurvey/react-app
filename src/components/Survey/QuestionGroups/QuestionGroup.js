import { useCallback } from 'react'
import classNames from 'classnames'
import ContentEditable from 'react-contenteditable'

import Section from 'components/Survey/Section'
import Card from 'components/Survey/Card'
import L10ns from 'components/L10ns'

import Questions from './Questions'

const QuestionGroup = ({
    language,
    questionGroup: {
        l10ns = {},
        questions = []
    } = {},
    questionGroup,
    update,
}) => {
    const handleUpdate = (change) => {
        update({
            ...questionGroup,
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

    const handleUpdateQuestions = (questions) =>
        handleUpdate({ questions })

    return (
        <Section>
            <Card>
                <div className={classNames('header')}>
                    <div className={classNames('title', 'flex-grow-1')}>
                        <ContentEditable
                            html={L10ns({ prop: 'group_name', language, l10ns })}
                            onChange={(e) => handleUpdateL10ns({ group_name: e.target.value })}
                        />
                    </div>
                </div>
                <div className={classNames('body')}>
                    <div class="description">
                        <ContentEditable
                            html={L10ns({ prop: 'description', language, l10ns })}
                            onChange={(e) => handleUpdateL10ns({ description: e.target.value })}
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
