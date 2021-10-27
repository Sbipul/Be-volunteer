import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Events = () => {
    const history = useHistory()
    const [events,setEvents] = useState([])

    useEffect(()=>{
        fetch('https://lit-wildwood-40735.herokuapp.com/features')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])

    const goEvent = name => {
        history.push(`/regi/${name}`)
    }

    // console.log(events)
    return (
        <div>
            <Container>
            <h1 className="text-center">I grow by helping people in need</h1>
            <div className="w-75 py-5 mx-auto d-flex align-items-center justify-content-center">
                <input className="px-3 w-50 py-1 m-0" type="text" name="" id="" />
                <Button className="m-0">Search</Button>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1.5rem'}}>
                {
                    events.map(event => <div onClick={()=>goEvent(event.name)} key={event.name}>
                        <div>
                            <div><img src={event.img} className="w-100" alt="" /></div>
                            <h3 className="bg-success fs-4 p-3">{event.name}</h3>
                        </div>
                    </div>)
                }
            </div>
            </Container>
        </div>
    );
};

export default Events;