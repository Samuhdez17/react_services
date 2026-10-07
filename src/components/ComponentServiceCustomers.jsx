import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Goblal';

export default class ComponentServiceCustomers extends Component {
    state = {
        customers: []

    }

    cargarCustomers = () => {
        console.log('antes del servicio');
        axios.get(Global.urlNorthwind + 'Customers')
        .then((respuesta) => {
            console.log('leyendo respuesta')

            this.setState({
                customers: respuesta.data.value
            })
        })
        
        console.log('despues del servicio');
    }

    componentDidMount = () => {
        this.cargarCustomers()
    }

    render() {
        return (
        <div>
            <h1>Servicio api de customers</h1>

            {
                this.state.customers.map((c, i) => {
                    return (
                        <div key={i} style={{
                            padding:'20px'
                        }}>
                            <h4 >
                                Nombre: {c.ContactName}
                            </h4>

                            <h4>
                                Titulo: {c.ContactTitle}
                            </h4>
                        </div>
                    )
                })
            }
        </div>
        )
    }
}
