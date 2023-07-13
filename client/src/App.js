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

      <main>
        <section className="container bg-dark full-size d-flex justify-content-center align-items-center home position-relative">
          <article className="overlay"></article>
          <article className="container row">
            <div className="col-md-7 col-12 d-flex flex-column justify-content-center align-items-md-start gap-3 second-z-index">
              <h1 className="text-light text-header">
                Spoil your flavour buds, even today!
              </h1>
              <p className="text-grey text-sm text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo
              </p>
              <button className="btn btn-outline-secondary text-lg px-5">
                Eat now!
              </button>
            </div>
            <div className="col position-relative">
              {/* <img
                src="https://freepngimg.com/save/139399-food-nutrition-top-view-plate/563x587"
                width="10%"
                className="position-absolute homepage-image"
              /> */}
            </div>
          </article>
        </section>
        <section className="container">
          {/* <div className="row gap-0">
          {backendData.length !== 0 &&
            backendData.map((item) => (
              <FoodCard key={item._id} info={{ ...item }} />
            ))}
        </div> */}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
