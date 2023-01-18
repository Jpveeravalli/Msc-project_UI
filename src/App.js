
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Route,Routes,Link, BrowserRouter} from "react-router-dom";
import Home from './features/Home';
import Calculation from './features/Calculation';
import About from './features/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  as={Link} to="/home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/calculation">Calculation</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    <div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/calculation" element={<Calculation/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
