import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      {typeof backendData.users !== "undefined" &&
        backendData.users.map((user) => <div key={user}>{user}</div>)}
    </>
  );
}

export default App;
