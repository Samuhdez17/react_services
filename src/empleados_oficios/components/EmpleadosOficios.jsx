import axios from 'axios'
import Global from '../Global'
import React, { Component } from 'react'

export default class EmpleadosOficios extends Component {
    selectOficios = React.createRef()

    state = {
        oficios: [],
        empleados: [],
    }

    generarOficios = () => {
        let url = Global.urlEmpleados

        axios.get(url)
        .then((respuesta) => {
            let aux = new Set([])

            for (let empleado of respuesta.data) {
                aux.add(empleado.oficio)
            }

            this.setState({
                oficios: Array.from(aux)
            })
        })
    }

    buscarEmpleados = (e) => {
        e.preventDefault()

        let url = Global.urlEmpleados
        let request = 'EmpleadosOficio/' + this.selectOficios.current.value

        axios.get(url + request)
        .then((respuesta) => {
            this.setState({
                empleados: respuesta.data
            })
        })
    }

    componentDidMount = () => {
        this.generarOficios()
    }

    render() {
        return (
            <div>
                <h1>Empleados Oficios</h1>

                <form onSubmit={this.buscarEmpleados}>
                    <select ref={this.selectOficios}>
                        {
                            this.state.oficios.map((of, i) => {
                                return (
                                    <option key={i}>{of}</option>
                                )
                            })
                        }
                    </select>
                    <button>Buscar empleados</button>
                </form>

                <table border="1">
                    {
                        this.state.empleados.length > 0 && (
                            <thead>
                                <tr>
                                    <th>Apellido</th>
                                    <th>Oficio</th>
                                    <th>Salario</th>
                                </tr>
                            </thead>
                        )
                    }

                    <tbody>
                        {
                            this.state.empleados.map((emp, i) => {
                                return (
                                    <tr key={i}>
                                        <td style={{
                                            padding: '10px'
                                        }}>
                                            {emp.apellido}
                                        </td>

                                        <td style={{
                                            padding: '10px'
                                        }}>
                                            {emp.oficio}
                                        </td>

                                        <td style={{
                                            padding: '10px'
                                        }}>
                                            {emp.salario}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>  
            </div>
        )
    }
}
