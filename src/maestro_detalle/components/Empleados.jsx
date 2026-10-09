import axios from 'axios'
import Global from '../../Goblal'
import React, { Component } from 'react'

export default class Empleados extends Component {
    url = Global.urlAzureEmpleados

    state = {
        empleados: [],
    }

    componentDidMount = () => {
        this.cargarEmpleados()
    }
    
    componentDidUpdate = (oldProps) => {
        if(oldProps.idDepa !== this.props.idDepa){
            this.cargarEmpleados()
        }
    }

    cargarEmpleados = () => {
        let id = this.props.idDepa
        let request = 'EmpleadosDepartamento/' + id

        axios.get(this.url + request)
        .then((respuesta) => {
            this.setState({
                empleados: respuesta.data
            })
        })
    }

    render() {
        return (
        <div>
            <h1>Empleados</h1>

            <table>
                <tbody>
                    {this.state.empleados.map((emp, i) => {
                        return (
                            <tr key={i}>
                                <td style={{
                                    padding: '5px'
                                }}>
                                    {emp.apellido}
                                </td>

                                <td style={{
                                    padding: '5px'
                                }}>
                                    Oficio: {emp.oficio}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}
