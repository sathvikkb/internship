import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./Components/First Page/FirstPage";
import SecondPage from "./Components/Second Page/SecondPage";
function App() {

  return (
    <>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<FirstPage/>}/>   
    <Route path="/second" element={<SecondPage/>}/>
    </Routes>  
    </BrowserRouter>


    </>

  )
}

export default App
