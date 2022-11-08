
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/addresses/contact-us";
import Slider from "./components/slider.js/image";
import UserLogin from "./components/users/user-login";
import UserRigster from "./components/users/user-register";
import Welcome from "./components/welcome/main-page";

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({username: "preist" })
  return (
    <>
      <BrowserRouter>
      <userContext.Provider value={[user, setUser]}>
          <Routes>  
            <Route path="/" element={<Slider />} />     
            <Route path="/login" element={<UserLogin />} />   
            <Route path="/register" element={<UserRigster />} /> 
            <Route path="/contactUs" element={<ContactUs />} />       
          </Routes>
    </userContext.Provider>
    </BrowserRouter>
  
    </>
  );
}

export default App;
