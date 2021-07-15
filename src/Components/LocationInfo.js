import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ResidentConatiner from "./ResidentConatiner";

export default function LocationInfo({dataLocation}) {

    const lista = dataLocation.results[0].residents.slice(0,10).map((item) =>{
        return <ResidentConatiner 
        key = {item}
        dataResident={item}/>

  });
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{dataLocation.results[0].name}</Card.Title>
                            <Card.Text>
                            Tipo: {dataLocation.results[0].type}
                            <br/>
                            Dimensión: {dataLocation.results[0].dimension}
                            { console.log(dataLocation.results[0].name) }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            {lista}
        </div>
    )
}
