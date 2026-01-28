import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import content from '../../content';

const TopNavBar = ({ currentPage, onPageChange }) => {
    const [expanded, setExpanded] = useState(false);

    const handleNavClick = (page) => {
        onPageChange(page);
        setExpanded(false);
    };

    const navLinks = [
        { id: 'about', label: content.site.navigation.about },
        { id: 'experience', label: content.site.navigation.experience },
        { id: 'skills', label: content.site.navigation.skills },
        { id: 'contact', label: content.site.navigation.contact }
    ];

    return (
        <Navbar 
            bg="dark" 
            variant="dark" 
            expand="lg" 
            expanded={expanded}
            onToggle={setExpanded}
            className="shadow"
        >
            <Container fluid>
                <Navbar.Brand href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                    {content.site.brandName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {navLinks.map((link) => (
                            <Nav.Link
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                active={currentPage === link.id}
                            >
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNavBar;