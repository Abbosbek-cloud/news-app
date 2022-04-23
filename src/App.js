import Navbar from "./components/Navbar";
import NewsAddForm from "./components/NewsAddForm";
import NewsFilter from "./components/NewsFilter";
import NewsList from "./components/NewsList";
import "./styles/app.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <ToastContainer />
      <div className="content">
        <NewsList />
        <div className="content__page container">
          <NewsAddForm />
          <NewsFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
