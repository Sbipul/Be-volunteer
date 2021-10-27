import React, { useEffect, useState } from 'react';
import {Row,Col,Card, Container, Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth'

const MyEvent = () => {

    const [myCat,setMycat] = useState([])

    const {user} = useAuth()

    const userMail =user.email


    console.log(user)
    useEffect(()=>{
        fetch('http://localhost:7000/list')
        .then(res => res.json())
        .then(data => {
            const newMyCat = data.filter(cat => cat.email === userMail)
            setMycat(newMyCat)
        })
    },[])
    

    const cancelBtn = id => {
        fetch(`http://localhost:7000/list/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const newVolUpdate = myCat.filter(vol => vol._id !== id)
                setMycat(newVolUpdate)
            }
        })
    }
    return (
        <div>
            <Container>
            <Row xs={1} md={2} className="g-4">
                {
                    myCat.map(c => <Col>
                        <Card>
                            <div className="d-flex">
                                <div style={{height:'150px',width:'150px'}}><img src={user.displayURL} alt="" className="h-100" /></div>
                                <div className="text-start ps-5">
                                    <h4>{c.category}</h4>
                                    <h4>{c.date}</h4>
                                    <div className="w-100"><Button onClick={()=>cancelBtn(c._id)} className="ms-auto">Cancel</Button></div>
                                </div>
                            </div>
                        </Card>
                    </Col>)
                }
            </Row>
            </Container>
        </div>
    );
};

export default MyEvent;




