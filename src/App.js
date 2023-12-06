import React from "react"
import Header from "./components/Header"
import PortofolioList from "./components/PortofolioList"
import PortofolioForm from "./components/PortofolioForm"

import { PortofolioProvider } from "./context/PortofolioContext"

function App() {
  return (
    <PortofolioProvider>
      <>
        <Header />
        <div className="container">
          <PortofolioForm />
          <PortofolioList />
        </div>
      </>
    </PortofolioProvider>
  )
}

export default App
