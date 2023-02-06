import { Route, Routes } from "react-router-dom"
import { Home } from "@/components/home/Home"
import { Navbar } from "@/components/main/Navbar"
import { Footer } from "@/components/main/Footer"
import { UserProvider } from "@/contexts/UserProvider"
import { Login } from '@/components/authentication/Login';
import { Register } from '@/components/authentication/Register';

function App() {

   return (
      <>
      <UserProvider>
         <Routes>
            <Route element={<Navbar /> }>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
            </Route>
         </Routes>
         <Footer />
      </UserProvider>
      </>
   )
}

export default App