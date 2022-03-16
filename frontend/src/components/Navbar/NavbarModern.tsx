import React from 'react';

import { Container, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavbarModern = () => {
	return (
		<Navbar bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='/'>VILLA LINDA</Navbar.Brand>
				<Nav className='me-auto'>
					<NavDropdown title='Admin / Control' id='basic-nav-dropdown'>
						<NavDropdown.Item href='/control-habs'>
							Control Habs
						</NavDropdown.Item>
						<NavDropdown.Item href='/admin-habs'>
							Administrar Habs
						</NavDropdown.Item>
						<NavDropdown.Item href='/admin-habs/create-hab'>
							Crear Hab
						</NavDropdown.Item>
						<NavDropdown.Item href='/admin-habs/create-extra'>
							Crear Extra
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link href='/logs'>Logs Generales</Nav.Link>
					<Nav.Link href='#pricing'>Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarModern;
