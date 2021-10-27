import React from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddEvent = () => {

    const [event,setEvent] = useState({})


    const handleTitle = e => {
        const newEvent = {...event}
        newEvent.name = e.target.value;
        setEvent(newEvent)
    }
    const handleDate = e => {
        const newEvent = {...event}
        newEvent.date = e.target.value;
        setEvent(newEvent)
    }
    const handleDescription = e => {
        const newEvent = {...event}
        newEvent.description = e.target.value;
        setEvent(newEvent)
    }
    const handleImage = e => {
        const newEvent = {...event}
        newEvent.img = e.target.value;
        setEvent(newEvent)
    }

    const addEvent = () => {
        console.log(event)
        fetch('https://lit-wildwood-40735.herokuapp.com/add',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(event)
        }).then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('insert Successfully')
                setEvent({})
            }
        })
    }

    console.log(event)
    return (
        <div>
            <Container>
                <div className="row">
                    <div className="col-md-3 shadow p-5">
                        <div>
                            <div className="text-start">
                                <p className="m-0">Volenteer Registered list</p>
                                <h4 className="m-0 p-0"><span className="p-0 m-0 fs-1">+</span> Add an event</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                    <div className="text-start shadow p-5" style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1.5rem'}}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Event Title</Form.Label>
                                <Form.Control onChange={handleTitle} type="text" placeholder="Event Title" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Event Date</Form.Label>
                                <Form.Control onChange={handleDate} type="text" placeholder="Date" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Event Dascription</Form.Label>
                                <Form.Control onChange={handleDescription} type="text" placeholder="Dascription" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Event Image</Form.Label>
                                <Form.Control onChange={handleImage} type="text" placeholder="Image URL" />
                            </Form.Group>
                            <Button onClick={addEvent}>Add Event</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AddEvent;