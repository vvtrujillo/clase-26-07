import logo from './logo.svg';
import './App.css';
import Example from './Componente/Navbar';
import { useState } from 'react';
import { Button, Col, Container, Form, Input, Row } from 'reactstrap';
import Swal from 'sweetalert2';
import Listcomponent from './Componente/List/Listcomponent';

const App = () => {

  const[edad, setEdad] = useState(0);
  const[arreglo, setArreglo] = useState([1,2,3,4,5,6]);

  const[datos, setDatos] = useState({
    nombre:'',
    apellido:''
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

  const enviarDatos = (evento) => {
    evento.preventDefault();
    console.log('enviando datos....' + datos.nombre + ' ' + datos.apellido);
  }

  const aumentar = (e) =>{
    setEdad(edad+1);
    setArreglo([...arreglo,edad]);
  }

  const disminuir = (e) =>{    

    if(edad==0){
      Swal.fire('Edad no puede ser menor a cero');
    }
    else{
      setEdad(edad-1);
    }
  }

  const muestraNombre = (nombre) => {
    return nombre;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} className='center'><h1>La edad es: {edad}</h1></Col>
        <Col sm={6} md={3} className='center'><Button color='primary' onClick={aumentar}>Aumentar</Button></Col>
        <Col sm={6} md={3} className='center'><Button color='danger' onClick={disminuir}>Disminuir</Button></Col>        
      </Row>

      <h1>Formulario</h1>
      <Form className='row' onSubmit={enviarDatos}>
        <div className='col-md-3'>
          <input type='text' placeholder='nombre...' className='form-control' onChange={handleInputChange} name='nombre'></input>
        </div>
        <div className='col-md-3'>
          <input type='text' placeholder='apellido...' className='form-control' onChange={handleInputChange} name='apellido'></input>
        </div>
        <div className='col-md-3'>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </div>        
      </Form>
      {/*<Listcomponent arreglo={arreglo} setArreglo={setArreglo}></Listcomponent>*/}
      <Listcomponent nombre={this.state.nombre} apellido={this.state.apellido}></Listcomponent>
    </Container>
  );
}

export default App;
