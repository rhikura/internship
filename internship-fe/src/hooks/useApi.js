import { useState, useEffect } from "react"

let useApi = (uri) => {
    const [response,setResponse] = useState([])
    const [rows,setRows] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let fetchData = async () => {
        try{
            let response = await fetch(process.env.REACT_APP_API_URL+"/"+uri)
            setResponse(response)
            let data = await response.json()
            setRows(data)
        }catch(e){
            setError(e)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    return [rows,loading, error,response]
}

export default useApi