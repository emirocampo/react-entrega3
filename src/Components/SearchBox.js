import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LocationContainer from "./LocationContainer";


export default function SearchBox() {
    const [nameLocation, setNameLocation] = useState("");
    const [dataLocation, setDataLocation] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    
    useEffect(() => {
        if( isSearch ){
            fetch(`https://rickandmortyapi.com/api/location/?name=${nameLocation}`)
                .then(response => response.json())
                .then(dataApi => {
                    console.log(dataApi)
                    setDataLocation(dataApi)
                });
            console.log("desde el useEffect de isSearch")
            setIsSearch(false)
        }
        
    }, [isSearch, nameLocation])

    const handleNameLocation = (e) => {
        setNameLocation(e.target.value);
        console.log(nameLocation);
    }

    const handleSearch = () => {
        console.log("hizo click!!!")
        setIsSearch(true)
    }

    return (
        <div>
            <Col className="col-12">
                <Form>
                    <Row className="align-items-center text-center">
                        <Col className="col-8 my-1">
                            <Form.Control 
                                type="text" 
                                placeholder="Earth (C-137)" 
                                value={nameLocation}
                                onChange={(e)=>{ handleNameLocation(e) }}
                            />
                        </Col>
                        <Col className="col-4 my-1">
                            <Button variant="primary" onClick={() => { handleSearch() }}>Search</Button>
                        </Col>
                    </Row>
                </Form>                
            </Col>
            <Col className="col-12">
                { dataLocation && <LocationContainer dataLocation={dataLocation} /> }
            </Col>
        </div>
    )
}
