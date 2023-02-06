import { Route, Routes } from "react-router-dom"
import { Home } from "@/components/home/Home"
import { Navbar } from "@/components/main/Navbar"
import { Footer } from "@/components/main/Footer"

function App() {

   return (
      <>
         <Routes>
            <Route element={<Navbar /> }>
               <Route path="/" element={<Home />} />
            </Route>
         </Routes>
         <Footer />
      </>
   )
}

export default App