import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//Pages
import HomePage from "./pages/Home"

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </>
  )
}

export default App
