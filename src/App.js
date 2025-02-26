<<<<<<< HEAD
import "./App.css";
=======
import { Outlet } from "react-router-dom";
import "./App.scss";
>>>>>>> 6090b5e (commit)
import Header from "./components/Header/Header";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Header />
=======
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidebar-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
>>>>>>> 6090b5e (commit)
    </div>
  );
}

export default App;
