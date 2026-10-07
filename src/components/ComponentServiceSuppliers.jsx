import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Goblal'

export default class ComponentServiceSuppliers extends Component {
    idSupplier = React.createRef()

    state = {
        suppliers: [],
        supplier: null,
    }

    buscarSupplier = (e) => {
        e.preventDefault()
        const request = 'Suppliers'
        
        let id = parseInt(this.idSupplier.current.value)
        console.log(`buscando por id ${id}`);
        
        axios.get(Global.urlNorthwind + request)
        .then ((respuesta) => {
            for (let supp of respuesta.data.value) {
                if (supp.SupplierID === id) {
                    this.setState({
                        supplier: supp
                    })
                    break

                } else 
                    this.setState({
                        supplier: null
                    })
            }
        })
    }

    cargarSuppliers = () => {
        const request = 'Suppliers'
        axios.get(Global.urlNorthwind + request)
        .then ((respuesta) => {
            this.setState({
                suppliers: respuesta.data.value
            })
        })
    }

    componentDidMount = () => {
        this.cargarSuppliers()
    }

    render() {
        return (
        <div>
            <h1>Servicio api de suppliers</h1>

            <form onSubmit={this.buscarSupplier}>
                <label>Indica el id del supplier</label>
                <input type="number" ref={this.idSupplier}/>

                <button>Buscar por</button>
            </form>

            {
                this.state.supplier &&
                <div style={{
                        padding:'20px'
                    }}>
                    <h4 >
                        ID: {this.state.supplier.SupplierID}
                    </h4>

                    <h4>
                        Nombre: {this.state.supplier.ContactName}
                    </h4>
                </div>
            }

            {
                !this.state.supplier &&
                    this.state.suppliers.map((s, i) => {
                        return (
                            <div key={i} style={{
                                padding:'20px'
                            }}>
                                <h4 >
                                    ID: {s.SupplierID}
                                </h4>

                                <h4>
                                    Nombre: {s.ContactName}
                                </h4>
                            </div>
                        )
                    })
            }
        </div>
        )
    }
}
