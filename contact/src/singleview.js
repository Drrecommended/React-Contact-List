import React, { useState, useEffect } from 'react'
import Phonebook from './contacts.json'
import './App.css';
import { FaUser, FaEnvelope, FaPhone, FaArrowLeft } from 'react-icons/fa'
import { GiEarthAmerica } from 'react-icons/gi'


export default function Singleview(props) {
    const [contact, setContact] = useState({ name: {}, location: {}, picture: {} })
    useEffect(() => {
        const id = props.match.params.id
        const user = Phonebook.find(item => id == item.id)
        setContact(user)
    }, [props.match.params.id])

    function goBack(e) {
      e.preventDefault()
      props.history.push("/")
    }

    return (
        <div>
            <div>
                <div className="view">Single View</div>
                <div className="title2">
                  <button onClick={goBack}><FaArrowLeft></FaArrowLeft></button>
                  <img className="largeImage" src={contact.picture.large} alt="contactPicture"></img>
                </div>
                <div className="name2"><FaUser />
                  <div className="info">{contact.name.first} {contact.name.last}</div>
                </div>
                <div className="email"><FaEnvelope />
                  <div className="info">{contact.email}</div>
                </div>
                <div className="email"><FaPhone />
                  <div className="info">{contact.phone}</div>
                </div>
                <div className="location"><GiEarthAmerica />
                  <div className="info">{contact.location.city}, {contact.location.state}</div>
                </div>  
            </div>
        </div>
    )
}