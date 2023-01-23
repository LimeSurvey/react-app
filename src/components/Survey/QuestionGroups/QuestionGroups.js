import { useCallback } from 'react'
import QuestionGroup from './QuestionGroup'

const QuestionGroups = ({ questionGroups = [], update }) => {
	const handleUpdate = useCallback((index, questionGroup) =>
		update([
			...questionGroups.slice(0, index),
			questionGroup,
			...questionGroups.slice(index + 1),
		]),
		[questionGroups]
	)

	return questionGroups.map((questionGroup, index) => (
		<QuestionGroup
			key={`question-group-${questionGroup.gid}`}
			questionGroup={questionGroup}
			update={(questionGroup) => handleUpdate(index, questionGroup)}
		/>
	))
}

export default QuestionGroups
