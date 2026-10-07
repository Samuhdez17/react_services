import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Goblal'

export default class EmpleadosDepartamentos extends Component {
    selectDepa = React.createRef()
    urlEmpleados = Global.urlAzureEmpleados
    urlDepartamentos = Global.urlAzureDepartamentos

    state = {
        empleados: [],
        departamentos: [],
    }

    buscarEmpleados = (e) => {
        e.preventDefault()
        let id = this.selectDepa.current.value
        let request = 'EmpleadosDepartamento/' + id

        axios.get(this.urlEmpleados + request)
        .then((respuesta) => {
            console.log('buscando empleados del depa no: ' + id);
            
            this.setState({
                empleados: respuesta.data
            })
        })
    }

    cargarDepartamentos = () => {
        let request = 'webresources/departamentos'
        axios.get(this.urlDepartamentos + request)
        .then((respuesta) => {
            this.setState({
                departamentos: respuesta.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarDepartamentos()
    }

    render() {
        return (
        <div>
            <h1>Api Empleados por Departamento</h1>

            <form onSubmit={this.buscarEmpleados}>
                <label>Indica id departamento</label>
                <select ref={this.selectDepa}>
                    {
                        this.state.departamentos.map((dep,i) => {
                            return (
                                <option value={dep.numero} key={i}>{dep.nombre}</option>
                            )
                        })
                    }
                </select>
                <button>Buscar empleados</button>
            </form>

            {
                this.state.empleados.map((emp, i) => {
                    return (
                        <li key={i}>
                            {emp.apellido} ; Oficio: {emp.oficio}
                        </li>
                    )
                })
            }
        </div>
        )
    }
}
