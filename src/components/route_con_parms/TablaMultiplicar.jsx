import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        tabla: [],
    }

    generarTabla = () => {
        let aux = []
        let num = parseInt(this.props.numero)

        for (let i = 1; i <= 10; i++) {
            aux.push(num * i)
        }

        this.setState({
            tabla: aux
        })
    }

    componentDidMount = () => {
        this.generarTabla()
    }

    render() {
        return (
            <div>
                <h1>La tabla del {this.props.numero}</h1>
                <ul className='list-group'>
                    {
                        this.state.tabla.map((item, index) => {
                            return (
                                <li className='list-group-item' key={index}>
                                    {this.props.numero} x {index + 1} = {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
