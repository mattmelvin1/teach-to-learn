
import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap';


class TeachToLiveNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Nav>
                        <NavDropdown eventKey={3} title="Teach to Learn" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/home">Home</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2} href="/home">Logout</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} href="/home">Help</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default TeachToLiveNavbar;