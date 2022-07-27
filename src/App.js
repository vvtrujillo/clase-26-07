import logo from './logo.svg';
import './App.css';
import Example from './Componente/Navbar';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import Swal from 'sweetalert2';

const App = () => {

  const[edad, setEdad] = useState(0);
  const[arreglo, setArreglo] = useState([1,2,3,4,5,6])

  const aumentar = (e) =>{
    setEdad(edad+1);
    //setArreglo
  }

  const disminuir = (e) =>{    

    if(edad==0){
      Swal.fire('Edad no puede ser menor a cero','warning');
    }
    else{
      setEdad(edad-1);
    }
  }

  return (
    <Container>
      <Row>
        <Col xs={12} className='center'><h1>La edad es: {edad}</h1></Col>
        <Col sm={6} md={3} className='center'><Button color='primary' onClick={aumentar}>Aumentar</Button></Col>
        <Col sm={6} md={3} className='center'><Button color='danger' onClick={disminuir}>Disminuir</Button></Col>
      </Row>
    </Container>
  );
}

export default App;
