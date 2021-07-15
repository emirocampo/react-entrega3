import React from 'react'
import Card from 'react-bootstrap/Card'

export default function ResidentInfo({dataResident}) {
    return (
        <div>
            <Card>
            <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title>{dataResident.name}</Card.Title>
                    <Card.Text>
                    Estatus:
                    <br/>
                    Origen: 
                    <br/>
                    Dimensión: 
                    
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
