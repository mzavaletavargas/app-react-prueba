import React from 'react';
import './App.css';
import {
 Link,
} from 'react-router-dom';

const Navigation = (props) => {
 return <React.Fragment>
  <nav>
   <table>
    <tr key="">
     <td><Link to="/pagina1" >pagina 1</Link></td>
     <td><Link to="/pagina2">pagina 2</Link></td>
    </tr>
   </table>
  </nav>

 </React.Fragment>
}
export default Navigation;
