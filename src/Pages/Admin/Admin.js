import React, { useEffect, useState } from 'react';
import { ButtonGroup, Container, Table } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";
const Admin = () => {

    const [allVol,setAllVol] = useState([])
    useEffect(()=>{
        fetch('https://lit-wildwood-40735.herokuapp.com/list')
        .then(res => res.json())
        .then(data => setAllVol(data))
    },[])

    const deleteBtn = id => {
        fetch(`https://lit-wildwood-40735.herokuapp.com/list/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Delete successfull')
                const newVolUpdate = allVol.filter(vol => vol._id !== id)
                setAllVol(newVolUpdate)
            }
        })
    }
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
                    <div className="text-start">
                    <Table className="w-100" striped bordered hover size="lg">
                        <thead className="w-100 p-2 bg-success">
                            <tr>
                            <th>Volenteer</th>
                            <th>Email</th>
                            <th>Category</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                            {
                                allVol.map(vol => <tbody>
                                    <tr>
                                    <td>{vol.name}</td>
                                    <td><small>{vol.email}</small></td>
                                    <td>{vol.category}</td>
                                    <td><ButtonGroup onClick={()=>deleteBtn(vol._id)} className="text-center text-danger"><FaTrash/></ButtonGroup></td>
                                    </tr>
                                </tbody>
                                )
                            }
                        
                    </Table>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Admin;