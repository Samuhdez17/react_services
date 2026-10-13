import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/tabla_multiplicar/27'>Tabla del 27</NavLink>
                    </li>

                    <li>
                        <NavLink to='/collatz/7'>Collatx de 7</NavLink>
                    </li>

                    <li>
                        <NavLink to='/collatz/10'>Collatx de 10</NavLink>
                    </li>

                    <li>
                        <NavLink to='/collatz/4'>Collatx de 4</NavLink>
                    </li>

                    <li>
                        <NavLink to='/collatz/10020010020102'>Collatx de 10020010020102</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
