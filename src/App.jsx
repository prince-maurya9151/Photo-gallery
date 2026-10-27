// import Gallery from "./components/Gallery";
// export default function App() {
//   return <Gallery />;
// }


import { useState, useReducer, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import { favouritesReducer, loadFavourites } from "./reducers/favouritesReducer";

export default function App() {
  const [page, setPage] = useState("home");
  const [favourites, dispatch] = useReducer(favouritesReducer, [], loadFavourites);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header page={page} setPage={setPage} favCount={favourites.length} />
      <main className="flex-1">
        {page === "home" && <Home favourites={favourites} dispatch={dispatch} />}
        {page === "dashboard" && <Dashboard favourites={favourites} dispatch={dispatch} />}
        {page === "about" && <About />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}