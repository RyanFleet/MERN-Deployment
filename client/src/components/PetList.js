import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const PetList = (props) => {
    const {pets,setPets, id} = props
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/allPets')
            .then((res) => {
                console.log(res.data)
                // cant figure out the list by type
                // pets.sort((a, b) => a.res.data.type.localeCompare(b.res.data.type))
                setPets(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

        
        
        return (
            <div className='bg-secondary container-fluid'>
            <h1>Welcome to the Pet Schelter!</h1>
            <h3>These pets are looking for a good home.</h3>
            <div>
                <Link style={{color: 'lightblue'}} to={'/pets/new'}>Add Pets</Link>
            </div>
            <br></br>
            {
                pets.map((pet, index) => {
                    return <div key={index}>
                        <table className='table table-dark table-striped table-hover'>
                            <thead>
                                <tr>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Type
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link style={{color: 'lightblue'}} to={`/pets/${pet._id}`}>{pet.name}</Link>
                                    </td>
                                    <td>
                                        {pet.type}
                                    </td>
                                    <td className='p-1'>
                                        <Link className='btn btn-outline-info btn-sm' to={`/pets/${pet._id}/edit`}>Edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                })
            }
        </div>
    )
}

export default PetList