import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const TopNavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => document.getElementById('aboutPageTracker').scrollIntoView({ behavior: 'smooth' })}>About</Nav.Link>
                    <Nav.Link onClick={() => document.getElementById('experiencePageTracker').scrollIntoView({ behavior: 'smooth' })}>Experience</Nav.Link>
                    <Nav.Link onClick={() => document.getElementById('skillsPageTracker').scrollIntoView({ behavior: 'smooth' })}>Skills</Nav.Link>
                    <Nav.Link onClick={() => document.getElementById('contactPageTracker').scrollIntoView({ behavior: 'smooth' })}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default TopNavBar;