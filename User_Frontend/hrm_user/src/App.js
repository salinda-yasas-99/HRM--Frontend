import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard";
import Employee from "./pages/Employee";
import Sidebar from "./components/SideBar";
import PayRole from "./pages/PayRole";
import Attendence from "./pages/Attendence";
import Leaves from "./pages/Leaves";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Sidebar />
              <DashBoard />
            </>
          }
        />
        <Route
          path="/employee"
          element={
            <>
              <Sidebar />
              <Employee />
            </>
          }
        />
        <Route
          path="/leaves"
          element={
            <>
              <Sidebar />
              <Leaves />
            </>
          }
        />

        <Route
          path="/payrole"
          element={
            <>
              <Sidebar />
              <PayRole />
            </>
          }
        />
        <Route
          path="/attendance"
          element={
            <>
              <Sidebar />
              <Attendence />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
