import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    var [textdata, settextdata] = useState('')
    var navigate = useNavigate()


    function myfun(event) {
        event.preventDefault()
        console.log('Search Form',textdata)  
        
        if(textdata!=''){
            navigate('/search-box/'+textdata)
        }
    }


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>                
                <Nav className="me-auto">
                    <Nav.Link >
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="top-rated-movies">Top Rated Movies</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="upcoming-movies">Upcoming Movies</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="*">Page not Found</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="fakestore">props drilling</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="allproducts">State lift</Link>
                    </Nav.Link>  
                    <Nav.Link>
                        <Link to="form">React Hook Form</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="Formik">Formik Form</Link>
                    </Nav.Link>  
                    <Nav.Link>
                        <Link to="redux">Redux</Link>
                    </Nav.Link>                               
                    <Nav.Link>
                        <Link to="class1">Class 1</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="class2">Class 2</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="class3">Class 3</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="class4">Class 4</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="class5">Class 5</Link>
                    </Nav.Link>   
                    <Nav.Link>
                        <Link to="class6">Class 6</Link>
                    </Nav.Link> 
                    <Nav.Link>
                        <Link to="class7">Class 7</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="class8">Class 8</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="Qrcode">Qr code</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="props drilling">props drilling</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="Show">Show</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="add">Add</Link>
                    </Nav.Link>
                                                                       
                    <Form inline onSubmit={myfun}>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text" onChange={(event) => { settextdata(event.target.value) }}
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button> 
                            </Col>
                        </Row>
                    </Form>

                </Nav>

            </Container>
        </Navbar>
    )
}
