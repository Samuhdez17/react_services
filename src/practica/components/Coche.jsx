import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Goblal'

export default class Coche extends Component {
    url = Global.apiCoches
    selectCoche = React.createRef()

    state = {
        coche: null,
    }

    cargarInfo = () => {
        let id = this.props.idCoche
        let request = 'api/Coches/FindCoche/' + id

        axios.get(this.url + request)
        .then((respuesta) => {
            this.setState({
                coche: respuesta.data
            })
        })
    }

    componentDidMount = () => {
        this.cargarInfo()
    }
    
    componentDidUpdate = (oldProps) => {
        if(oldProps.idCoche !== this.props.idCoche)
            this.cargarInfo()
    }

    render() {
        return (
        <div>
            {
                this.state.coche && (
                    <div>
                        <h1>Informacion del vehiculo</h1>
                        <img src={this.state.coche.imagen} alt="foto coche" 
                        style={{
                            height:'300px',
                            width: '600px'
                        }}
                        />

                        <h4>Marca: {this.state.coche.marca} </h4>
                        <h4>Modelo: {this.state.coche.modelo} </h4>
                        <h4>Conductor: {this.state.coche.conductor} </h4>
                    </div>
                )
            }
        </div>
        )
    }
}
