import { Col, Row, Table } from "reactstrap";
import { FaDraftingCompass, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Listcomponent = ({arreglo, setArreglo}) =>{

    const eliminar = (e, i) => {
        Swal.fire({
            title: 'Esta seguro?',
            text: 'Desea eliminar el elemento?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar!'
        }).then(resp => {
            if(resp.isConfirmed){
                const arr = arreglo.filter((v, index) => index != i);
                setArreglo(arr);
            }
        })
    }

const {nombre, apellido} = this.props;

    return(
        <Row>
            <Col xs={12}>
                <Table>
                    <thead>
                        <tr>
                            <th>Valor</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arreglo.map((valor, index) => <tr>
                            <td>{valor}</td>                            
                            <td><FaRegTrashAlt onClick={e => eliminar(e, index)}></FaRegTrashAlt></td>
                            </tr>)}
                    </tbody>
                </Table>
            </Col>
            <div>
                <ul>
                    {/*<li>{this.props.nombre}</li>*/}
                    {/*<li>{apellido}</li>*/}
                </ul>
                
            </div>
        </Row>       
    )

}

export default Listcomponent;