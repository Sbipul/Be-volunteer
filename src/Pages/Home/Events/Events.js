import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Events.css'


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

    const color = ['success','danger','warning','primary']
    const rnd = Math.floor(Math.random()*4)
    console.log(color[rnd])
    // console.log(events)
    return (
        <div>
            <Container className="pb-5">
            <h1 className="text-center">I grow by helping people in need</h1>
            <div className="w-75 py-5 mx-auto d-flex align-items-center justify-content-center">
                <input className="px-3 w-50 py-1 m-0" type="text" name="" id="" />
                <Button className="m-0">Search</Button>
            </div>

            <div className="griD">
                {
                    events.map(event => <div onClick={()=>goEvent(event.name)} key={event.name}>
                        <div>
                            <div style={{position:'relative',overflow:'hidden',borderRadius:'20px',height:'300px'}}>
                                <img className="w-100 h-100" src={event.img || 'https://previews.123rf.com/images/mousemd/mousemd1710/mousemd171000009/87405336-404-not-found-concept-glitch-style-vector.jpg'} className="w-100" alt="" />
                                <div style={{padding:'10px',position:'absolute',bottom:'0',content:'" "',width:'100%'}} className={'bg-'+ color[rnd]+''}>
                                <h4>{event.name}</h4>
                            </div>
                            </div>
                            
                        </div>
                    </div>)
                }
            </div>
            </Container>
        </div>
    );
};

export default Events;