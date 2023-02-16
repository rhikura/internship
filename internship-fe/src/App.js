import useApi from "./hooks/useApi";

function App() {

  const [rows, loading, error, response] = useApi("todo")
  const [{health}] = useApi("health")

  let getServerHealthStatus = () => {
    if(health !== "OK"){
      return <span style={{color: "red"}}>Disconnected</span>
    }
    return <span style={{color: "green"}}>Connected to {response.headers.get('backend-ip')}</span>
  }

  if(loading){
    return <p>Loading ... </p>
  }

  return (
    <div className="container">
      <h3>Hello I'm a {process.env.REACT_APP_IP} frontend server</h3>
      <h4>API Status: {getServerHealthStatus()}</h4>
      <ul>
        {rows.map(row=>{
          return <li key={row.id}>{row.id} {row.title}</li>
        })}
      </ul>
      <span color="gray">Version: 0.0.2</span>
    </div>
  );
}

export default App;