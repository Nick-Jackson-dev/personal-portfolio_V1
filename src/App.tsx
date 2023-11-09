import { BrowserRouter, Route, Routes } from "react-router-dom"

//components
import MainNavbar from "./components/MainNavbar"

//pages
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { ProjectsPage, ProjectPage } from "./pages/Projects/index"

//styles
import "./App.css"
import RedirectPage from "./pages/RedirectPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route
            path="*"
            element={
              <RedirectPage to="/">
                <p>This page doesn't exist, you will be sent back to home.</p>
              </RedirectPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
