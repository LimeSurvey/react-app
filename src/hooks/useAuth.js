import { useQuery, useMutation } from '@tanstack/react-query'
import { axiosLsApi } from '../axios'
import { queryClient } from 'Query'

const useAuth = () => {
    const { data: auth } = useQuery({
        queryKey: ['auth'],
        queryFn: () => {
            return {token: null}
        },
        staleTime: Infinity,
        cacheTime: Infinity
    })

    const setAuth = (value) => {
        return queryClient.setQueryData(
            ['auth'],
            value
        )
    }

    const loginMutation = useMutation({
        mutationFn: async loginData => {
            if (auth && auth.token) {
                return auth
            }
            const params = new URLSearchParams()
            const { username, password } = loginData
            params.append('username', username)
            params.append('password', password)
            const response = await axiosLsApi.post('/session', params)
            return response.data
        },
        onSuccess: (data) => {
            setAuth({ token: data})
            axiosLsApi.defaults.headers.common = {
                'Authorization': 'Bearer ' + data
            }
        }
    })

    const isLoggedIn = !!auth && !!auth.token
    const isPending = (
        loginMutation && (
            loginMutation.isLoading
            || loginMutation.isError
        )
    )


    const login = () => {
        if (
            !isLoggedIn
            && !isPending
        ) {
            console.log({
                isLoggedIn
            })
            loginMutation.mutate({
                username: 'admin',
                password: 'password'
            })
        }
    }

    return { isLoggedIn, isPending, login, loginMutation }
}

export default useAuth
