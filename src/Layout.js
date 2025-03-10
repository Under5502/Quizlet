import { Routes, Route } from "react-router-dom";
import App from "./App";
import Users from "./components/Users/Users";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManageUsers from "./components/Admin/Content/ManageUsers";
import Dashboard from "./components/Admin/Content/Dashboard";
import Login from "./components/Auth/Login";
import { ToastContainer } from "react-toastify";
import Register from "./components/Auth/Register";
import ListQuizlet from "./components/Users/ListQuizlet";
import DetailQuiz from "./components/Users/DetailQuiz";
function Layout(props) {
  const NotFound = () => {
    return <div className="alert alert-danger">Not Found</div>;
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<ListQuizlet />} />
        </Route>
        <Route path="/quiz/:id" element={<DetailQuiz />} />
        <Route path="/admins" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManageUsers />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick={true}
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
}

export default Layout;
