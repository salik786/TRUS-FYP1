import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import Home from "./home.component";
import Register from "./register.component"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Admin from "./admin.component";
import Approval from "./approval.component"


class BootstrapNavbar extends React.Component {

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-12">
                        <Router>
                            <Navbar style={{ backgroundColor: "#3D4264", border: "2px solid #3D4264" }} variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Property Register</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href="/home">Home</Nav.Link>
                                        <Nav.Link href="/register">Register</Nav.Link>
                                        <Nav.Link href="/admin">Admin</Nav.Link>


                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/home">
                                    <Home />
                                </Route>
                                <Route path="/register">
                                    <Register />
                                </Route>
                                <Route path="/admin">
                                    <Admin />
                                </Route>
                                <Route exact path="/survey/:id" render={(props) => (
                                    <Approval {...props} params={this.props.params} />
                                )} />


                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;