import Signin from "../components/Signin/Signin";
import Signup from "../components/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
// import {Forgotpassword} from "../components/Forgot-password/Forgotpassword";
// import {Newpassword} from "../components/Forgot-password/New-pass/Newpassword";
// import {Landingpage} from "../components/Landing page/Landingpage";



import {BrowserRouter, Route, Routes,} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Signin/>}/>
      <Route  path="/Signup" element={<Signup/>}/>
      <Route  path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    
    </>



  )
};

export default App;
