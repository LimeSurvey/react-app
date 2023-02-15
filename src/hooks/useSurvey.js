import { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'

import { queryClient } from 'query'

const useSurvey = (id) => {
    const [ survey, setSurvey ] = useState(null)
    const [ language, setLanguage ] = useState('en')
    const { data } = useQuery(['survey', id], async () => {
        const res = await fetch('/data/survey-detail.json')
        return await res.json()
    }, {
        staleTime: Infinity,
        cacheTime: Infinity
    })

    const update = (updateData) => {
        setSurvey({
            ...survey,
            ...updateData
        })
    }

    // const persistCurrentState = async () =>
    //   fetch('/data/survey.json', {
    //     method: 'POST',
    //     body: JSON.stringify(survey),
    //   })
    const persistCurrentState = () => {
        queryClient.setQueryData(
            ['survey', id],
            {survey}
        )
    }

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

    return {
        survey,
        update,
        save: persistCurrentState,
        language,
        switchLanguage
    }
}

export default useSurvey
