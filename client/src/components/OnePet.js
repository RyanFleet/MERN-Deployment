import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const OnePet = () => {
    const { id } = useParams()
    const [pets, setPets] = useState([])

    const nav = useNavigate()

    const [liked,setLiked] = useState(false)
    const [likes,setLikes] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPets(res.data)
            })
            .catch(err => { console.log(err) })
    }, [])
    const deletePets = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                alert(`${pets.name} was adopted!!`)
                nav('/')
                setPets(pets.filter(pet => pet._id !== id))
            })
            .catch(err => console.log(err))
    }
    const addLike = () =>{
        setLikes(+1)
        setLiked(true)
    }

    return (
        <div className='container-fluid bg-secondary'>
            <h2>Details for {pets.name}:</h2>
            <p>Type: {pets.type}</p>
            <p>Description: {pets.description}</p>
            <p>Skills: {pets.skill1} {pets.skill2} {pets.skill3}</p>
            <p>{likes} like(s)</p>
            <button className='btn btn-danger btn-sm' onClick={(e) => { deletePets(id) }}>Adopt {pets.name}!</button>
            {
                liked ? <button className='btn btn-success btn-sm' onClick={e=>addLike(likes)} disabled>Like {pets.name}</button> : 
                <button className='btn btn-success btn-sm' onClick={e=>addLike()}>Like {pets.name}</button>
            }
            <Link style={{color: 'lightblue'}} to={'/'}>Back to list</Link>
        </div>
    )
}

export default OnePet