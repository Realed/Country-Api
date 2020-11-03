import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//Pages
import HomePage from "./pages/Home"
import CountryPage from "./pages/Country"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/countries/:country" component={CountryPage} />
      </Router>
    </>
  )
}

export default App
