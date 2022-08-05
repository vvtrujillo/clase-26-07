import logo from './logo.svg';
import './App.css';
import Example from './Componente/Navbar';
import { useState } from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import Swal from 'sweetalert2';
import Listcomponent from './Componente/List/Listcomponent';

const App = () => {

  const[edad, setEdad] = useState(0);
  const[arreglo, setArreglo] = useState([1,2,3,4,5,6]);  
  const[datos, setDatos] = useState({
    nombre:'',
    apellido:'',
    email:'',
    edad:'',
    colorpelo: ''
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
    //console.log('enviando datos....' + datos.nombre + ' ' + datos.apellido);
    setDatosMuestra({nombreMostrar:datos.nombre, apellidoMostrar:datos.apellido, emailMostrar:datos.email
    ,edadMostrar:datos.edad, colorpeloMostrar:datos.colorpelo});
  }

  const [datosMuestra, setDatosMuestra] = useState({
    
    nombreMostrar:'',
    apellidoMostrar:'',
    emailMostrar:'',
    edadMostrar: '',
    colorpeloMostrar: ''

  });

  const aumentar = (e) =>{
    console.log(datosMuestra.edadMostrar);

    //setEdad(datosMuestra.edadMostrar+1);
    setDatosMuestra(datosMuestra.edadMostrar+1);
    enviarDatos();
    //setArreglo([...arreglo,datosMuestra.edadMostrar]);
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
      {/*<Row>
        <Col xs={12} className='center'><h1>La edad es: {edad}</h1></Col>
        <Col sm={6} md={3} className='center'><Button color='primary' onClick={aumentar}>Aumentar</Button></Col>
        <Col sm={6} md={3} className='center'><Button color='danger' onClick={disminuir}>Disminuir</Button></Col>        
      </Row>*/}

      <h1>Formulario</h1>
      <Form className='row' onSubmit={enviarDatos}>
        <FormGroup row>
          <div className='col-md-1'>
            <label>Nombre:</label>
          </div>
          <div className='col-md-4'>            
            <input type='text' placeholder='nombre...' className='form-control' onChange={handleInputChange} name='nombre'></input>
          </div>
        </FormGroup>
        <FormGroup row>
          <div className='col-md-1'>
            <label>Apellido:</label>
          </div>
          <div className='col-md-4'>            
            <input type='text' placeholder='apellido...' className='form-control' onChange={handleInputChange} name='apellido'></input>
          </div>
        </FormGroup>
        <FormGroup row>
          <div className='col-md-1'>
            <label>edad:</label>
          </div>
          <div className='col-md-4'>
            <input type='text' placeholder='edad...' className='form-control' onChange={handleInputChange} name='edad'></input>
          </div>
        </FormGroup>
        <FormGroup row>
          <div className='col-md-1'>
            <label>color pelo:</label>
          </div>
          <div className='col-md-4'>
            <input type='text' placeholder='color pelo...' className='form-control' onChange={handleInputChange} name='colorpelo'></input>
          </div>
        </FormGroup>
        <FormGroup row>
          <div className='col-md-1'>
            <label>email:</label>
          </div>
          <div className='col-md-4'>
            <input type='email' placeholder='email...' className='form-control' onChange={handleInputChange} name='email'></input>
          </div>
        </FormGroup>
        <FormGroup row>
          <div className='col-md-3'>
            <button type='submit' className='btn btn-primary'>Enviar</button>
          </div>
          <div className='col-md-3'>
            <Button color='primary' onClick={aumentar}>Aumentar</Button>
          </div>
        </FormGroup>                
      </Form>      
      <Listcomponent nombre={datos.nombre} 
                     apellido={datos.apellido} 
                     arreglo={arreglo}
                     setArreglo={setArreglo}
                     nombreMostrar={datosMuestra.nombreMostrar}
                     apellidoMostrar={datosMuestra.apellidoMostrar}
                     emailMostrar={datosMuestra.emailMostrar}
                     edadMostrar={datosMuestra.edadMostrar}
                     colorpeloMostrar={datosMuestra.colorpeloMostrar}>                    
      </Listcomponent>
      <Row>
        
      </Row>
    </Container>
  );
}

export default App;
