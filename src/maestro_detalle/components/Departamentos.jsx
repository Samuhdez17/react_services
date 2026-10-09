import axios from 'axios'
import Global from '../../Goblal'
import React, { Component } from 'react'
import Empleados from './Empleados'

export default class Departamentos extends Component {
    selectDepa = React.createRef()
    urlDepartamentos = Global.urlAzureDepartamentos

    state = {
        departamentos: [],
        idDepartamento: 0,
    }

    cargarDepartamentos = () => {
        let request = 'webresources/departamentos/'
        axios.get(this.urlDepartamentos + request)
        .then((respuesta) => {
            this.setState({
                departamentos: respuesta.data
            })
        })
    }

    buscarEmpleados = (e) => {
        e.preventDefault()
        
        let id = this.selectDepa.current.value
        this.setState({
            idDepartamento: id
        })
    }

    componentDidMount = () => {
        this.cargarDepartamentos()
    }

    render() {
        return (
        <div>
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
                this.state.idDepartamento > 0 && (
                    <Empleados idDepa = {this.state.idDepartamento}/>
                )
            }
        </div>
        )
    }
}
