import { Component } from 'react'

export default class Collatz extends Component {
    state = {
        secuencia: [],
    }

    generarSecuencia = () => {
        let aux = []
        let num = parseInt(this.props.numero)

        while(num !== 1) {
            if (num % 2 === 0) 
                num = num / 2
            else 
                num = (num * 3) + 1
            
            aux.push(num)
        }

        this.setState({
            secuencia: aux
        })
    }

    componentDidMount = () => {
        this.generarSecuencia()
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numero !== this.props.numero) {
            this.generarSecuencia()
        }
    }

    render() {
        return (
            <div>
                <h1>Secuencia de Collatz con {this.props.numero}</h1>

                {
                    this.state.secuencia.map((num, i) => {
                        return (
                            <span key={i}>
                                {num}
                                {
                                    i !== this.state.secuencia.length - 1 ? ' -> ' : ''
                                }
                            </span>
                        )
                    })

                }
            </div>
        )
    }
}

