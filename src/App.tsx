import { BrowserRouter, Route, Routes } from "react-router-dom"

//components
import MainNavbar from "./components/MainNavbar"

//pages
import Home from "./pages/Home"

//styles
import "./App.css"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { ProjectsPage } from "./pages/Projects/index"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
