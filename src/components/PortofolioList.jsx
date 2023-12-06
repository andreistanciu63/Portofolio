import React from "react"
import PortofolioItem from "./PortofolioItem"
import { useContext } from "react"
import PortofolioContext from "../context/PortofolioContext"

function PortofolioList() {
  const { portofolio } = useContext(PortofolioContext)

  if (!portofolio || portofolio.length === 0) {
    return <p>No portofolio yet</p>
  }
  return (
    <div className="feedback-list">
      {portofolio.map(item => (
        <PortofolioItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default PortofolioList
