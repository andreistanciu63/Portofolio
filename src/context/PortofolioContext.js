import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid"

const PortofolioContext = createContext()

export const PortofolioProvider = ({ children }) => {
  const [portofolio, setPortofolio] = useState([
    {
      id: 1,
      text: "Titlu pentru portofoliu",
      description: "Descriere pentru portofoliu",
      technologies: "Tehnologii pentru portofoliu",
      customerLink: "https://www.customer-website.com",
    },
  ])

  const deletePortofolio = id => {
    if (window.confirm("Are you sure you want to delete?")) {
      setPortofolio(portofolio.filter(item => item.id !== id))
    }
  }

  const addPortofolio = newPortofolio => {
    newPortofolio.id = uuidv4()
    setPortofolio([newPortofolio, ...portofolio])
  }

  const [portofolioEdit, setPortofolioEdit] = useState({
    item: {},
    edit: false,
  })

  const editPortofolio = item => {
    setPortofolioEdit({
      item,
      edit: true,
    })
  }

  const updatePortofolio = (id, updItem) => {
    setPortofolio(
      portofolio.map(item =>
        item.id === id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    )
  }

  return (
    <PortofolioContext.Provider
      value={{
        portofolio,
        portofolioEdit,
        deletePortofolio,
        addPortofolio,
        editPortofolio,
        updatePortofolio,
      }}
    >
      {children}
    </PortofolioContext.Provider>
  )
}

export default PortofolioContext
