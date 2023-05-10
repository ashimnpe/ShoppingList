import React from 'react';
import {Navbar,Nav,NavLink,NavItem,Container} from 'react-bootstrap';

class AppNavbar extends React.Component{
    // we did not use constructer because we used arrow function if we had used bind this method then we have to use constructer
        state = {
            isOpen: false
        }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <div>
            <Navbar expand="lg" bg="dark" variant="dark" className="mb-5">
                <Container>
                    <Navbar.Brand>Shopping List</Navbar.Brand>
                    <Navbar.Toggle onClick={this.toggle}></Navbar.Toggle>
                    <Navbar.Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Github</NavLink>
                        </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        );
    }
}

export default AppNavbar;