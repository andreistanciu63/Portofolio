import React from "react"
import Card from "../shared/Card"
import { useState, useContext, useEffect } from "react"
import Button from "../shared/Button"
import PortofolioContext from "../context/PortofolioContext"

function PortofolioForm() {
  const [text, setText] = useState("")
  const [description, setDescription] = useState("")
  const [technologies, setTechnologies] = useState("")
  const [customerLink, setCustomerLink] = useState("")

  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

  const handleTextChange = e => {
    if (text === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== " " && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleDescriptionChange = e => {
    if (description === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (description !== " " && description.trim().length <= 10) {
      setMessage("Description must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setDescription(e.target.value)
  }

  const handleTechnologiesChange = e => {
    if (technologies === "") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (technologies !== " " && technologies.trim().length <= 10) {
      setMessage("Technologies must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setTechnologies(e.target.value)
  }

  const handleCustomerLinkChange = e => {
    // Handle changes in the customer link input
    setCustomerLink(e.target.value)
  }

  const { addPortofolio, portofolioEdit, updatePortofolio } =
    useContext(PortofolioContext)

  useEffect(() => {
    if (portofolioEdit.edit === true) {
      setBtnDisabled(false)
      setText(portofolioEdit.item.text)
      setDescription(portofolioEdit.item.description)
      setTechnologies(portofolioEdit.item.technologies)
      setCustomerLink(portofolioEdit.item.customerLink)
    }
  }, [portofolioEdit])

  const handleSubmit = e => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newPortofolio = {
        text,
        description,
        technologies,
        customerLink,
      }
      if (portofolioEdit.edit === true) {
        updatePortofolio(portofolioEdit.item.id, newPortofolio)
      } else {
        addPortofolio(newPortofolio)
      }

      setText("")
      setDescription("")
      setTechnologies("")
      setCustomerLink("")
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Add an Portofolio</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Add Title"
            value={text}
          />
        </div>
        <div className="input-group">
          <input
            onChange={handleDescriptionChange}
            type="text"
            placeholder="Add Description"
            value={description}
          />
        </div>
        <div className="input-group">
          <input
            onChange={handleTechnologiesChange}
            type="text"
            placeholder="Add Technologies"
            value={technologies}
          />
        </div>
        <div className="input-group">
          <input
            onChange={handleCustomerLinkChange}
            type="text"
            placeholder="Add Customer Link"
            value={customerLink}
          />
        </div>
        <Button type="submit" isDisabled={btnDisabled}>
          Send
        </Button>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default PortofolioForm
