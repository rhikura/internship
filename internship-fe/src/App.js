import useApi from "./hooks/useApi";

function App() {

  const [rows, loading, error] = useApi("todo")
  const [{health}] = useApi("health")

  let getServerHealthStatus = () => {
    if(health !== "OK"){
      return <span style={{color: "red"}}>Not Ok</span>
    }
    return <span style={{color: "green"}}>Ok</span>
  }

  if(loading){
    return <p>Loading ... </p>
  }

  return (
    <div>
      <h1>Hello I'm a {process.env.REACT_APP_IP} frontend server</h1>
      <h2>API Status: {getServerHealthStatus()}</h2>
      <ul>
        {rows.map(row=>{
          return <li key={row.id}>{row.id} {row.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;