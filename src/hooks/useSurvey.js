import { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

const useSurvey = (id) => {
    const [ survey, setSurvey ] = useState({questionGroups: []})
    const [ language, setLanguage ] = useState('en')
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

    const switchLanguage = (language) => {
        if (
            language
            && data?.survey?.languagesettings
            && data?.survey?.languagesettings[language]
        ) {
            setLanguage(language)
        }
    }

    const { mutate } = useMutation(persistCurrentState)

    useEffect(() => {
        if (!data) return

        setSurvey(data.survey)
        if (data?.survey?.language) {
            switchLanguage(data.survey.language)
        }
    }, [data])

    console.log(survey);

    return {
        survey,
        update: setSurvey,
        save: mutate,
        language,
        switchLanguage
    }
}

export default useSurvey
