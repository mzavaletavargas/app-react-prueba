import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export const Category = () => {
    return (
        <Router>
        <div>
            <nav>
                <table>
                <tr key="">
                    <td><Link to="/pagina3/frutas">Frutas</Link></td>
                    <td><Link to="/pagina3/verduras">Verduras</Link></td>
                </tr>
                </table>
            </nav>
            <Switch >
                <Route path="/pagina3/frutas">
                <div>
                    <h1>Estas en la pagina de frutas</h1>
                </div>
                </Route>
                <Route path="/pagina3/verduras">                    
                <div>
                    <h1>Estas en la pagina de verduras</h1>
                </div>
                </Route>
            </Switch>    
        </div>
        </Router>
    )
}
