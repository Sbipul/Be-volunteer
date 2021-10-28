import React from 'react';
import { Container } from 'react-bootstrap';
import logo1 from '../../utilities/silverlogo.jpg'
const Footer = () => {
    return (
        <div className="pt-5">
        <div className="bg-light shadow-lgg">
            <Container>
                <div className="row">
                    <div className="col-6 col-md-3 text-start py-3 ">
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">Use full links</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">Donating systam</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">Contact info</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">facebook pages</p> 
                    </div>
                    <div className="col-6 col-md-3 text-start py-3 ">
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">View Gallery</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">My event link</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">All events list</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">Subscription</p> 
                    </div>
                    <div className="col-6 col-md-3 text-start py-3 ">
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">About us</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">Our Blog</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">Daily activities</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0 text-dark">Summery</p> 
                    </div>
                  <div className="col-6 col-md-3 py-3">
                  <img
                        src={logo1}
                        width="150"
                        height="100"
                        className="d-inline-block align-top m-0"
                        alt="React Bootstrap logo"
                    />
                    </div>
                </div>
            </Container>
        </div>
        <div className="bg-secondary py-2">
            <Container>
                <div>
                    <p className="text-center p-0 m-0 text-light">Allrights reserved || &copy;2021-2050</p>
                </div>
            </Container>
        </div>
        </div>
    );
};

export default Footer;