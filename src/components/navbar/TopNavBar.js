import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import content from '../../content';

const TopNavBar = () => {
    const [activeSection, setActiveSection] = useState('aboutPageTracker');
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // Configure IntersectionObserver with rootMargin to detect sections
        // Top -20% and bottom -70% creates a detection zone in the upper portion of viewport
        // This ensures sections are marked active when they enter the top 30% of the screen
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const trackers = document.querySelectorAll('.scroll-tracker');
        trackers.forEach((tracker) => {
            observer.observe(tracker);
        });

        return () => {
            trackers.forEach((tracker) => {
                observer.unobserve(tracker);
            });
        };
    }, []);

    const scrollToSection = (trackerId) => {
        const element = document.getElementById(trackerId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setExpanded(false);
    };

    const navLinks = [
        { id: 'aboutPageTracker', label: content.site.navigation.about },
        { id: 'experiencePageTracker', label: content.site.navigation.experience },
        { id: 'skillsPageTracker', label: content.site.navigation.skills },
        { id: 'contactPageTracker', label: content.site.navigation.contact }
    ];

    return (
        <Navbar 
            bg="dark" 
            variant="dark" 
            expand="lg" 
            fixed="top"
            expanded={expanded}
            onToggle={setExpanded}
            className="shadow"
        >
            <Container fluid>
                <Navbar.Brand href="#" onClick={(e) => { e.preventDefault(); scrollToSection('aboutPageTracker'); }}>
                    {content.site.brandName}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        {navLinks.map((link) => (
                            <Nav.Link
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                active={activeSection === link.id}
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