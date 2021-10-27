import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link ,useParams} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'


const Register = () => {
    const {name} = useParams()
    const {user} = useAuth()

    const [newVol,setNewVol] = useState({})



    // const handleName = e => {
    //     const updateVolName = {...newVol}
    //     updateVolName.name = e.target.value
    //     setNewVol(updateVolName)
    //     console.log(newVol)
    // }


    // const handleEmail = e => {
    //     const updateVolEmail = {...newVol}
    //     updateVolEmail.email = e.target.value
    //     setNewVol(updateVolEmail)
    // }
    const handleDate = e => {
        const updateVolDate = {...newVol}
        updateVolDate.date = e.target.value
        setNewVol(updateVolDate)
    }
    const handleDescription = e => {
        const updateVolDescription = {...newVol}
        updateVolDescription.description = e.target.value
        setNewVol(updateVolDescription)
    }
    // const handleCategory = e => {
    //     const updateVolCategory = {...newVol}
    //     updateVolCategory.category = e.target.value
    //     setNewVol(updateVolCategory)
    // }



    const newMember = e => {
        const lastUpdate = newVol;
        lastUpdate.name = user.displayName
        lastUpdate.email = user.email
        lastUpdate.category = name
        setNewVol(lastUpdate)

        fetch('http://localhost:7000/regi',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newVol)
        }).then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added to new Volenteer list')
            }
        })



        e.preventDefault()
    }
    return (
        <div>
            <Container>
                <div className="w-50 pb-5 mx-auto">
                    <div>
                        <h4 className="text-center fw-bold">Register as Volenteer</h4>
                        <Form className="text-start shadow p-5">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className="fw-bold">Name</Form.Label>
                                <Form.Control  className="border-0 rounded-0 border-bottom" value={user?.displayName || ''} type="text" placeholder="Enter Name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="fw-bold">Email address</Form.Label>
                                <Form.Control  className="border-0 rounded-0 border-bottom " value={user?.email || ''} type="email" placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Date</Form.Label>
                                <Form.Control onChange={handleDate} className="border-0 rounded-0 border-bottom " type="text" placeholder="Date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Dascription</Form.Label>
                                <Form.Control onChange={handleDescription} className="border-0 rounded-0 border-bottom " type="text" placeholder="Dascription" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label className="fw-bold">Volenteer category</Form.Label>
                                <Form.Control  className="border-0 rounded-0 border-bottom " value={name || ''} type="text" placeholder="Dascription" />
                            </Form.Group>
                            <Button onClick={newMember} className="w-100" variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;