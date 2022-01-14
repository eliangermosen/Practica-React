// siempre debe comenzar con use el hook

import { useEffect, useState } from "react"
import { get } from "axios";

const useFetch = (endPoint) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()

    useEffect(()=>{
        get(`${process.env.REACT_APP_URL_API}${endPoint}`)
        .then(({data}) => setData(data))
        .catch(err => setError(err))
    },[endPoint]);

    return [data, error]

}

export default useFetch