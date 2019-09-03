
import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';


class TeachToLiveNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Nav>
                        <NavDropdown eventKey={3} title="Teach to Learn" id="basic-nav-dropdown" pullRight>
                            <MenuItem eventKey={3.1} href="/signup">Signup</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2} href="/login">Login</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} href="/">Logout</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} href="/">Help</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}
export default TeachToLiveNavbar;