import { useQuery, useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const useSurvey = (id) => {
    const [ survey, setSurvey ] = useState({questionGroups: []})
    const { data } = useQuery(['survey', id], async () => {
        const res = await fetch('/data/survey-detail.json')
        return await res.json()
    })

    // const persistCurrentState = async () =>
    //   fetch('/data/survey.json', {
    //     method: 'POST',
    //     body: JSON.stringify(survey),
    //   })

    const persistCurrentState = () => console.log(survey)

    const { mutate } = useMutation(persistCurrentState)

    useEffect(() => {
        if (!data) return

        setSurvey(data.survey)
    }, [data])

    console.log(survey);

    return { survey, update: setSurvey, save: mutate }
}

export default useSurvey
