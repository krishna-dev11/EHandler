import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Authentication from "./Components/Core/Auth/Authentication";
import NotFound from "./Components/Common/NotFound";
import SignUPFnameLname from "./Components/Core/Auth/SignUPFnameLname";
import CreateGoogleAccount from "./Components/Core/Auth/CreateGoogleAccount";
import BasicInformation from "./Components/Core/Auth/BasicInformation";
import ChooseGmailAddress from "./Components/Core/Auth/ChooseGmailAddress";
import CreatePassword from "./Components/Core/Auth/CreatePassword";
import PhoneVerification from "./Components/Core/Auth/PhoneVerification";
import EnterCode from "./Components/Core/Auth/EnterCode";
import EmailVerification from "./Components/Core/Auth/EmailVerification";


function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Authentication" element={<Authentication/>}/>
        <Route path="/SignUP_FName_LName" element={<CreateGoogleAccount/>}/>
        <Route path="/BaiscInfo" element={<BasicInformation/>}/>
        <Route path="/ChooseGmailAddress" element={<ChooseGmailAddress/>}/>
        <Route path="/CreatePassword" element={<CreatePassword/>}/>
        <Route path="/PhoneVerification" element={<EmailVerification/>}/>
        <Route path="/EnterCode" element={<EnterCode/>}/>





        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
