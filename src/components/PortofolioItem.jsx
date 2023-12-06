import React, { useState } from "react"
import Card from "../shared/Card"
import { FaTimes, FaEdit, FaMinus, FaEye } from "react-icons/fa"
import { useContext } from "react"
import PortofolioContext from "../context/PortofolioContext"

function PortofolioItem({ item, children }) {
  const { deletePortofolio, editPortofolio } = useContext(PortofolioContext)

  const [show, setShow] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null)

  const toggleShow = () => {
    setShow(!show)
  }

  const handleFileChange = event => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  return (
    <div className="portofolio-item">
      {show && (
        <Card>
          <div className="content-wrapper">
            <div className="image-box">
              <label className="custom-file-upload">
                <input type="file" onChange={handleFileChange} />
                Change
              </label>
              {selectedFile && (
                <img
                  className="selected-image"
                  src={URL.createObjectURL(selectedFile)}
                  alt="Selected"
                />
              )}
            </div>
            <div className="text-display">
              <div>
                <span>Title: </span>
                {item.text}
              </div>
              <div>
                <span>Descriere: </span>
                {item.description}
              </div>
              <div>
                <span>Tehnologii: </span>
                {item.technologies}
              </div>
              <div>
                <span>Link: </span>
                <a
                  href={item.customerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.customerLink}
                </a>
              </div>
            </div>
          </div>

          <button onClick={() => deletePortofolio(item.id)} className="close">
            <FaTimes color="purple" />
          </button>
          <button onClick={() => editPortofolio(item)} className="edit">
            <FaEdit color="purple" />
          </button>
        </Card>
      )}
      <div className="button-container">
        <button className="button" onClick={toggleShow}>
          {show ? (
            <FaMinus color="purple" className="minus-icon" />
          ) : (
            <FaEye color="purple" className="eye-icon" />
          )}
        </button>
      </div>
    </div>
  )
}

export default PortofolioItem
