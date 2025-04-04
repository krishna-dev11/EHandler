import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Authentication from "./Components/Core/Auth/Authentication";
import NotFound from "./Components/Common/NotFound";
import SignUPFnameLname from "./Components/Core/Auth/SignUPFnameLname";


function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Authentication" element={<Authentication/>}/>
        <Route path="/SignUP_FName_LName" element={<SignUPFnameLname/>}/>



        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
