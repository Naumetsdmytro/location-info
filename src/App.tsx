import {Routes, Route} from "react-router-dom";
import {Home} from "./pages";
import {Login, LoginData, SignUp, SignUpData} from "./features/auth";

function App() {
  const onLoginSubmit = (data: LoginData) => {
    console.log(data)
  }

  const onSignUpSubmit = (data: SignUpData) => {
    console.log(data)
  }

  return (
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/auth/login" element={<Login onSubmit={onLoginSubmit}/>}/>
       <Route path="/auth/signup" element={<SignUp onSubmit={onSignUpSubmit}/>}/>
     </Routes>
  )
}

export default App
