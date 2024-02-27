import axios from 'axios'
import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [erorr, setError] = useState(null)

    const getEvents = async () => {
        setIsPending(true)
        try {
            const {data} = await axios.get(url)
            setIsPending(false)
            console.log(data);
            setData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

    return {data, isPending, erorr}

}