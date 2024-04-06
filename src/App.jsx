import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import EmployeSignup from "./components/EmployeSignup";
import EmployeHome from "./components/EmployeHome";
import StudentHome from "./components/StudentHome";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser } from "./store/Actions/userActions";
import { asynccurrentEmploye } from "./store/Actions/employeActions";
import ViewInternship from "./components/ViewInternship";
import ViewJob from "./components/ViewJobs";
import CreateInternship from "./components/CreateInternship";
import CreateJobs from "./components/CreateJobs";
import Review from "./components/Review";
import EmployeEdit from "./components/EmployeEdit";
import Applications from "./components/Applications";
import Resume from "./components/Resume";

const App = () => {
  const { isAuth } = useSelector((state) => state.userReducers);
  const { isAuthh } = useSelector((state) => state.employeReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asynccurrentUser());
  }, []);

  useEffect(() => {
    dispatch(asynccurrentEmploye());
  }, []);

  return (
    <div className="h-screen w-full">
      <hr />
      <Routes>
        <Route path="/" element={!isAuth ? <Home /> : <StudentHome />} />
        <Route path={"/student/signup"} element={<Signup />} />
        {/* employe routes */}
        <Route
          path="/employe"
          element={!isAuthh ? <Home /> : <EmployeHome />}
        />
        <Route path="/employe/signup" element={<EmployeSignup />} />
        {/* ViewInternship routes */}
        <Route path="/internship/detail/:id" element={<ViewInternship />} />
        {/* ViewJobs route */}
        <Route path="/job/detail/:id" element={<ViewJob />} />
        <Route path="/internship/create" element={<CreateInternship />} />
        <Route path="/job/create" element={<CreateJobs />} />
        <Route path="/employe/view/job/:id" element={<ViewJob />} />
        <Route path="/employe/view/internship/:id" element={<ViewInternship />} />
        <Route path="/review/:id" element={<Review/>} />
        <Route path="/editprofile" element={<EmployeEdit />} />
        <Route path="/student/applications" element={<Applications />} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </div>
  );
};

export default App;
