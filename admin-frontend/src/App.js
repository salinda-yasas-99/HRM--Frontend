import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../src/components/SideBar.js";
import LogIn from "./pages/LogIn";
import DashBoard from "./pages/DashBoard.js";
import Employees from "./pages/Employees.js";
import AddNewemployee from "./pages/AddNewemployee.js";
import Departments from "./pages/Departments.js";
import Positions from "./pages/Positions.js";
import Attendences from "./pages/Attendences.js";
import Announcements from "./pages/Announcements.js";
import PayRole from "./pages/PayRole.js";
import Leaves from "./pages/Leaves.js";
import AddLeaveType from "./pages/AddLeaveType.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route
          path="/admin/dashboard"
          element={
            <>
              <Sidebar />
              <DashBoard />
            </>
          }
        />
        <Route
          path="/admin/employees"
          element={
            <>
              <Sidebar />
              <Employees />
            </>
          }
        />
        <Route
          path="/admin/employees/add"
          element={
            <>
              <Sidebar />
              <AddNewemployee />
            </>
          }
        />

        <Route
          path="/admin/departments"
          element={
            <>
              <Sidebar />
              <Departments />
            </>
          }
        />
        <Route
          path="/admin/positions"
          element={
            <>
              <Sidebar />
              <Positions />
            </>
          }
        />
        <Route
          path="/admin/attendances"
          element={
            <>
              <Sidebar />
              <Attendences />
            </>
          }
        />
        <Route
          path="/admin/announcements"
          element={
            <>
              <Sidebar />
              <Announcements />
            </>
          }
        />
        <Route
          path="/admin/payroles"
          element={
            <>
              <Sidebar />
              <PayRole />
            </>
          }
        />
        <Route
          path="/admin/leaves"
          element={
            <>
              <Sidebar />
              <Leaves />
            </>
          }
        />
        <Route
          path="/admin/leaves/add"
          element={
            <>
              <Sidebar />
              <AddLeaveType />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
