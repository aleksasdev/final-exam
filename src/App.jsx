import { Route, Routes } from "react-router-dom"
import { Home } from "@/components/home/Home"
import { Navbar } from "@/components/main/Navbar"
import { Footer } from "@/components/main/Footer"
import { UserProvider } from "@/contexts/UserProvider"
import { Login } from '@/components/authentication/Login';
import { Register } from '@/components/authentication/Register';
import { Logout } from '@/components/authentication/Logout';
import { AskQuestion } from '@/components/home/askQuestion/AskQuestion';
import { PostsProvider } from "./contexts/PostsProvider"

function App() {

   return (
      <>
      <UserProvider>
         <PostsProvider>
            <Routes>
               <Route element={<Navbar /> }>
                  <Route path="/" element={<Home />} />
                  <Route path="/new-question" element={<AskQuestion />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/logout" element={<Logout />} />
               </Route>
            </Routes>
            <Footer />
         </PostsProvider>
      </UserProvider>
      </>
   )
}

export default App