import { useEffect, useState } from "react";
import FoodCard from "./components/foodCard";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      <Navbar />
      <main className="container pt-5">
        <div className="row">
          {backendData.length !== 0 &&
            backendData.map((item) => (
              <FoodCard key={item._id} info={{ ...item }} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
