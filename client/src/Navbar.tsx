import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function NavbarTop({ isDark, setDark }: darkProps) {
	const changeTheme = () => setDark(!isDark);

	return (
		<Navbar
			fixed="top"
			expand="lg"
			style={
				isDark
					? {
							backgroundColor: '#4c566a',
					  }
					: {
							backgroundColor: '#eceff4',
					  }
			}
			id="nav"
		>
			<Navbar.Brand href="#home">Saubuny Reddit</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#posts">View Posts</Nav.Link>
			</Nav>
			<Button
				variant={isDark ? 'outline-light' : 'outline-dark'}
				style={
					isDark
						? {
								backgroundColor: '#4c566a',
								color: '#eceff4',
						  }
						: {
								backgroundColor: '#eceff4',
								color: '#4c566a',
						  }
				}
				onClick={changeTheme}
			>
				Change Theme
			</Button>
		</Navbar>
	);
}
