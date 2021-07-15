import React from 'react'
import Card from 'react-bootstrap/Card'

export default function ResidentInfo({dataResident}) {
    return (
        <div>
            <Card>
            <Card.Img variant="top" src={dataResident.image} />
                <Card.Body>
                    <Card.Title>{dataResident.name}</Card.Title>
                    <Card.Text>
                    Estatus: {dataResident.status}
                    <br/>
                    Origen: {dataResident.origin.name}                    
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
