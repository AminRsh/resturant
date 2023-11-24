import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Home from "./pages/Home" 
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import './App.css'

function App() {

  return (
      <>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </>
  )
}

export default App
