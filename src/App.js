import './App.css';
import SearchBox from "./Components/SearchBox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <div>
        <Container>
            <Row className="justify-content-md-center">
                <SearchBox />
            </Row>
        </Container>
        
    </div>
  );
}

export default App;
