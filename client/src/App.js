import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      {backendData.length !== 0 &&
        backendData.map((item) => (
          <div key={item._id}>
            {item.name} {item.price}
          </div>
        ))}
      <h1></h1>
    </>
  );
}

export default App;
