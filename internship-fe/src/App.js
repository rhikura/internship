import { useEffect, useState } from "react";

function App() {

  const [rows,setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  let fetchData = async () => {
    try{
      let response = await fetch(process.env.REACT_APP_API_URL+"/todo")
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

  if(loading){
    return <p>Loading ... </p>
  }

  return (
    <ul>
      {rows.map(row=>{
        return <li key={row.id}>{row.id} {row.title}</li>
      })}
    </ul>
  );
}

export default App;