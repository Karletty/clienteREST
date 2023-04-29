import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import './styles.scss'

const NavBar = () => {
      return (
            <Navbar variant="dark">
                  <Nav className="me-auto">
                        <NavLink className='nav-link px-3 py-2' to="/">
                              Inicio
                        </NavLink>
                        <NavLink className='nav-link px-3 py-2' to="/create">
                              Crear editorial
                        </NavLink>
                  </Nav>
            </Navbar>
      );
}

export { NavBar }