import "antd/dist/antd.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
