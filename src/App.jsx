import { Route, Routes } from "react-router-dom"
import { Home } from "@/components/home/Home"
import { Navbar } from "@/components/main/Navbar"
import { Footer } from "@/components/main/Footer"
import { UserProvider } from "@/contexts/UserProvider"

function App() {

   return (
      <>
      <UserProvider>
         <Routes>
            <Route element={<Navbar /> }>
               <Route path="/" element={<Home />} />
            </Route>
         </Routes>
         <Footer />
      </UserProvider>
      </>
   )
}

export default App