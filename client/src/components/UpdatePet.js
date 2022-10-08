import React from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

const UpdatePet = (props) => {

    const {id} = useParams()
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [description, setDescription] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')

    const nav = useNavigate()

    const [errors, setErrors] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                setName(res.data.name)
                setType(res.data.type)
                setDescription(res.data.description)
                setSkill1(res.data.skill1)
                setSkill2(res.data.skill2)
                setSkill3(res.data.skill3)
            })
            .catch(err => console.log(err))
    },[])

    const Submit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${id}`,{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res=>{
            nav('/')
        })
        .catch(err => { setErrors(err.response.data.err.errors) })
    }


    return (
        <div className='container-fluid bg-secondary'>
        <form onSubmit={Submit} className='form-control form-control-lg bg-dark'>
            <div>
            <h1 style={{color:'lightblue'}}>Pet Shelter</h1>
            <h3 style={{color:'white'}}>Update {name}?</h3>
            </div>
            <p style={{color:'red'}}>* required</p>
            <Link style={{color: 'lightblue'}} to={'/'}>Back to list</Link>
            <h4>
                <label style={{color:'white'}}>* Name</label><br />
                <div style={{color:'red'}}>
                    {
                        errors.name && <p>{errors.name.message}</p>
                    }
                </div>
                <input name='name' value={name} type="text" onChange={(e) => setName(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>* Type</label><br />
                <div style={{color:'red'}}>
                {
                    errors.type && <p>{errors.type.message}</p>
                }
                </div>
                <input name='type' value={type} type="text" onChange={(e) => setType(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>* Description</label><br />
                <div style={{color:'red'}}>
                {
                    errors.description && <p>{errors.description.message}</p>
                }
                </div>
                <input  name='description' value={description} type="text" onChange={(e) => setDescription(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>Skill - 1</label><br />
                <input name='skill1' value={skill1} type="text" onChange={(e) => setSkill1(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>Skill - 2</label><br />
                <input name='skill2' value={skill2} type="text" onChange={(e) => setSkill2(e.target.value)} />
            </h4>
            <h4>
                <label style={{color:'white'}}>Skill - 3</label><br />
                <input name='skill3' value={skill3} type="text" onChange={(e) => setSkill3(e.target.value)} />
            </h4>
            <input className='btn btn-success' type="submit" value={"Update"} />

        </form>
    </div>
    )
}

export default UpdatePet