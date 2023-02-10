import QuestionGroup from './QuestionGroup'

const QuestionGroups = ({ language, questionGroups = [], update }) => {
	const handleUpdate = (index, questionGroup) =>
		update([
			...questionGroups.slice(0, index),
			questionGroup,
			...questionGroups.slice(index + 1),
		])

	return questionGroups.map((questionGroup, index) => (
		<QuestionGroup
			key={`question-group-${questionGroup.gid}`}
			language={language}
			questionGroup={questionGroup}
			update={(questionGroup) => handleUpdate(index, questionGroup)}
		/>
	))
}

export default QuestionGroups
