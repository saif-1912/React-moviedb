import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import apipath from '../env';
import { Link } from 'react-router-dom';

export default function Moviesbox({ records, title }) {
    return (
        <div>
            <Container>
                <h1 className='text-center text-uppercase'>{title}</h1>
                <Row>
                    {
                        records && records.length > 0 && records.map(({ poster_path, id, original_title, release_date }) =>

                            <Col xs={6} lg={3}>
                                <Link to={"/single-movie/" + id}>
                                    <img src={apipath.imagepath + '/' + poster_path} className='img-fluid' />
                                </Link>

                                <h5>{original_title}</h5>
                                <p>Release Date:{release_date}</p>
                            </Col>
                        )


                    }
                </Row>
            </Container>
        </div>
    )
}

