import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
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
            <h1 className="text-center">I grow by helping people</h1>
            <div className="w-75 py-5 mx-auto d-flex align-items-center justify-content-center">
                <input className="px-3 w-50 py-1 m-0" type="text" name="" id="" />
                <Button className="m-0">Search</Button>
            </div>
                <div className="griD">
                {
                    events.map(event => <div style={{cursor:'pointer'}} onClick={()=>goEvent(event.name)} key={event.name}>
                        <div>
                            <div id="carD">
                                <img src={event.img || 'https://previews.123rf.com/images/mousemd/mousemd1710/mousemd171000009/87405336-404-not-found-concept-glitch-style-vector.jpg'} className="w-100 h-100" alt="" />
                                <div id="text" className={'bg-'+ color[rnd]+''}>
                                    <h4>{event.name}</h4>
                                    <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>)
                }
                <Link to="/addEvnt">
                    <div style={{border:'1px solid grey',position:'relative',overflow:'hidden',borderRadius:'20px',height:'300px'}}>
                        <div style={{borderRadius:'50%',left:'26%',height:'43%',padding:'10px',position:'absolute',bottom:'28%',content:'" "',width:'50%'}} className={'bg-'+ color[rnd]+''}>
                            <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                <h4 className="text-dark">Add new</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div> 
            </Container>
        </div>
    );
};

export default Events;