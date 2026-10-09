import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Goblal'
import Coche from './Coche'

export default class Seleccionador extends Component {
    url = Global.apiCoches
    selectCoche = React.createRef()

    state = {
        coches: [],
        idCoche: 0,
    }

    cargarCoches = () => {
        let request = 'api/Coches/'
        axios.get(this.url + request)
        .then((respuesta) => {
            this.setState({
                coches: respuesta.data
            })
        })
    }

    buscarCoche = (e) => {
        e.preventDefault()
        
        let id = this.selectCoche.current.value
        this.setState({
            idCoche: id
        })
    }

    componentDidMount = () => {
        this.cargarCoches()
    }

    render() {
        return (
            <div>
                <h1>Buscador de coches</h1>

                <form onSubmit={this.buscarCoche}
                    style={{
                        padding:'10px',
                    }}
                >
                    <label>Seleccione un vehiculo</label>
                    <select ref={this.selectCoche}>
                        {
                            this.state.coches.map((c,i) => {
                                return (
                                    <option key={i} value={c.idCoche}> {c.marca} </option>
                                )
                            })
                        }
                    </select>
                    <button>Buscar vehiculo</button>
                </form>

                <Coche idCoche = {this.state.idCoche}/>
            </div>
        )
    }
}
