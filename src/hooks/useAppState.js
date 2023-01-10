import { useQuery } from '@tanstack/react-query'
import { queryClient } from 'Query'

// This hook uses react-query to cache state making
// - values accessible between components and also
// - between application reloads

const useAppState = (key, initValue = null) => {
  const { data } = useQuery({
    queryKey: ['appState', key],
    queryFn: () => initValue,
    staleTime: Infinity,
    cacheTime: Infinity
  })

  const update = (updateKey, value) => {
    return queryClient.setQueryData(
      ['appState', updateKey],
      value
    )
  }

  const setValue = (newValue) => update(key, newValue)

  return [
    data,
    setValue
  ]
}

export default useAppState
