import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const PetForm = (props) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')

    const {pets,setPets} = props
    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res => {
                console.log(res.data)
                setPets([...pets, res.data])
                nav('/')
            })
            .catch(err => { setErrors(err.response.data.err.errors) })
    }


    return (
        <div className='container-fluid bg-secondary'>
        <form onSubmit={Submit} className='form-control form-control-lg bg-dark'>
            <h1 style={{color:'lightblue', }}>Pet Shelter</h1>
            <h3 style={{color:'white'}}>Add a Pet?</h3>
            <p style={{color:'red'}}>* required</p>
            <Link style={{color: 'lightblue'}} to={'/'}>Back to list</Link>
            <h4>
                <label style={{color:'white'}}>* Name</label><br />
                <div style={{color:'red'}}>
                    {
                        errors.name && <p>{errors.name.message}</p>
                    }
                </div>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>* Type</label><br />
                <div style={{color:'red'}}>
                {
                    errors.type && <p>{errors.type.message}</p>
                }
                </div>
                <input type="text" onChange={(e) => setType(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>* Description</label><br />
                <div style={{color:'red'}}>
                {
                    errors.description && <p>{errors.description.message}</p>
                }
                </div>
                <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>Skill - 1</label><br />
                <div style={{color:'red'}}>
                </div>
                <input type="text" onChange={(e) => setSkill1(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>Skill - 2</label><br />
                <div style={{color:'red'}}>
                </div>
                <input type="text" onChange={(e) => setSkill2(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>Skill - 3</label><br />
                <div style={{color:'red'}}>
                </div>
                <input type="text" onChange={(e) => setSkill3(e.target.value)} />
            </h4>
            <input className='btn btn-success' type="submit" value={"Create Pet"} />

        </form>
    </div>
    )
}

export default PetForm