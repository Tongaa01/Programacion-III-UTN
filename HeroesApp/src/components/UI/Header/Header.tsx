import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Header = () => {

    const handleLogOut = ()=>{

    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >
                    <Link to={"/home"} className="nav-link">Heroes App</Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to={"/search"} className="nav-link">Buscar Heroe</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/dcHeroes"} className="nav-link">Heroes de DC</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={"/marvelHeores"} className="nav-link">Heroes de Marvel</Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Collapse className="justify-content-end gap-2">
                    <Navbar.Text>
                        Ingresado como: Admin
                    </Navbar.Text>
                    <Nav.Item>
                        <div className="d-flex justify-content-center align-items-center" onClick={handleLogOut}>
                            <span className="material-symbols-outlined" style={{ color: "#fff" }}>
                                person_cancel
                            </span>
                        </div>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
