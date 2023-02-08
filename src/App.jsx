import { Route, Routes } from "react-router-dom"
import { Home } from "@/components/home/Home"
import { Navbar } from "@/components/main/Navbar"
import { Footer } from "@/components/main/Footer"
import { UserProvider } from "@/contexts/UserProvider"
import { Login } from '@/components/authentication/Login';
import { Register } from '@/components/authentication/Register';
import { Logout } from '@/components/authentication/Logout';
import { AskQuestion } from '@/components/home/askQuestion/AskQuestion';
import { PostsProvider } from "@/contexts/PostsProvider"
import { EditPost } from "@/components/home/manipulation/EditPost"
import { DeletePost } from '@/components/home/manipulation/DeletePost';
import { ViewQuestion } from '@/components/home/renderQuestions/viewQuestion/ViewQuestion';

function App() {

   return (
      <>
      <UserProvider>
         <PostsProvider>
            <Routes>
               <Route element={<Navbar /> }>
                  <Route path="/" element={<Home />} />
                  <Route path="/new-question" element={<AskQuestion />} />
                  <Route path="/edit-question/:id" element={<EditPost />} />
                  <Route path="/delete-question/:id" element={<DeletePost />} />
                  <Route path="/view-question/:id" element={<ViewQuestion />} />

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