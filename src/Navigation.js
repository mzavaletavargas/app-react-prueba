import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav>
            <table>
            <tr key="">
                <td><Link to="/pagina1">Página 1</Link></td>
                <td><Link to="/pagina2">Página 2</Link></td>
                <td><Link to="/pagina3">Verduras y Frutas</Link></td>
            </tr>
            </table>
        </nav>
    )
}
