import {useState} from "react";

export const useApi = (cb) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const getData = async () => {
        try {
            setIsLoading(true)
            await cb()
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [getData, isLoading, error]
}
