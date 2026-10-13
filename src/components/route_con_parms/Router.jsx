import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import TablaMultiplicar from './TablaMultiplicar'
import Collatz from './Collatz'
import NotFound from './NotFound'
import Menu from './Menu'

export default class Router extends Component {
    render() {
        function TablaElement() {
            let { numero } = useParams()

            return(<TablaMultiplicar numero={numero}/>)
        }

        function CollatzElement() {
            let { numero } = useParams()

            return(<Collatz numero={numero}/>)
        }

        return (
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path='/'                           element={<Home/>} />
                    <Route path='/tabla_multiplicar/:numero'  element={<TablaElement/>}/>
                    <Route path='/collatz/:numero'            element={<CollatzElement/>}/>

                    {/* SIEMPRE EL ULTIMO Y * EN PATH */}
                    <Route path='*' element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}
