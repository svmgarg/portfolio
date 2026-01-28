import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import content from '../../content';

const TopNavBar = () => {
    const [activeSection, setActiveSection] = useState('aboutPageTracker');
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        // Configure IntersectionObserver with adjusted margins for better scroll tracking
        // Using navbar height (3.5rem) + small buffer for detection zone
        const observerOptions = {
            root: null,
            rootMargin: '-3.75rem 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            // Sort entries by their position to ensure we get the topmost visible section
            const visibleEntries = entries.filter(entry => entry.isIntersecting);
            if (visibleEntries.length > 0) {
                // Get the entry with the smallest boundingClientRect.top (closest to top)
                const topEntry = visibleEntries.reduce((prev, curr) => {
                    return prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr;
                });
                setActiveSection(topEntry.target.id);
            }
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