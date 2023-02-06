import { Route, Routes } from "react-router-dom"
import { Home } from "@/components/home/Home"
import { Navbar } from "@/components/main/Navbar"

function App() {

   return (
      <>
         <Routes>
            <Route element={<Navbar /> }>
               <Route path="/" element={<Home />} />
            </Route>
         </Routes>
      </>
   )
}

export default App