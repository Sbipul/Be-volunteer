import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Events.css'


const Events = () => {
    const history = useHistory()
    const [events,setEvents] = useState([])
    const [eventText,setEventText] = useState('')


    const searchEvent = e => {
        setEventText(e.target.value)
    }
    useEffect(()=>{
        fetch('https://lit-wildwood-40735.herokuapp.com/features')
        .then(res => res.json())
        .then(data => {
            setEvents(data.filter(event => event?.name?.toLowerCase().includes(eventText?.toLowerCase())))
        })
    },[eventText])

    const goEvent = name => {
        history.push(`/regi/${name}`)
    }

    const color = ['success','danger','warning','primary']
    const rnd = Math.floor(Math.random()*4)



    return (
        <div>
            <Container className="pb-5">
            <h1 className="text-center">I grow by helping people</h1>
            <div className="w-75 py-5 mx-auto d-flex align-items-center justify-content-center">
                <input onChange={searchEvent} className="px-3 w-50 py-1 m-0" type="text" name="" id="" placeholder="Search Event you wanna participate" />
            </div>
                {
                    (events.length) ? <div className="griD">
                    {
                        events.map(event => <div style={{cursor:'pointer'}} onClick={()=>goEvent(event.name)} key={event?._id}>
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
                </div> : <div style={{height:'50vh'}} className="w-100 d-flex align-items-center justify-content-center">
                    <div className="h-75 w-25">
                        <img src='https://c.tenor.com/paLeqWHpSloAAAAj/end-homelessness-homeless.gif' className="w-100 h-100" alt="" />
                    </div>
                </div>
                }
            </Container>
        </div>
    );
};

export default Events;