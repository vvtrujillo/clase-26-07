import { Col, Row, Table } from "reactstrap";
import {IoIosTrash} from 'react-icons/io';
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
                            <td><IoIosTrash onClick={e => eliminar(e, index)}></IoIosTrash></td>
                            </tr>)}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )

}

export default Listcomponent;