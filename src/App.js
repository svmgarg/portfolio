import './App.css';
import React from 'react';
import TopNavBar from './components/navbar/TopNavBar'
import AboutPage from './components/about/AboutPage'
import ExperiencePage from './components/experience/ExperiencePage';
import SkillsPage from './components/skills/SkillsPage';
import ContactPage from './components/contact/contactPage';

class App extends React.Component {

  // Navbar height offset for scroll detection
  static NAVBAR_OFFSET = 100;
  
  // Throttle delay for scroll events (ms)
  static SCROLL_THROTTLE_DELAY = 100;

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'about'
    };
    this.contentHolderRef = React.createRef();
    this.sectionRefs = {
      about: React.createRef(),
      experience: React.createRef(),
      skills: React.createRef(),
      contact: React.createRef()
    };
    this.contentHolderElement = null;
    this.scrollThrottleTimer = null;
  }

  componentDidMount() {
    // Add scroll listener to detect which section is in view
    if (this.contentHolderRef.current) {
      this.contentHolderElement = this.contentHolderRef.current;
      this.contentHolderElement.addEventListener('scroll', this.handleScrollThrottled);
    }
  }

  componentWillUnmount() {
    // Clean up scroll listener and any pending throttle timer
    if (this.scrollThrottleTimer) {
      clearTimeout(this.scrollThrottleTimer);
    }
    if (this.contentHolderElement) {
      this.contentHolderElement.removeEventListener('scroll', this.handleScrollThrottled);
    }
  }

  handleScrollThrottled = () => {
    // Throttle scroll events to improve performance
    if (this.scrollThrottleTimer) {
      return;
    }
    
    this.scrollThrottleTimer = setTimeout(() => {
      this.handleScroll();
      this.scrollThrottleTimer = null;
    }, App.SCROLL_THROTTLE_DELAY);
  }

  handleScroll = () => {
    const contentHolder = this.contentHolderRef.current;
    if (!contentHolder) return;

    // Get the scroll position with navbar offset
    const scrollPosition = contentHolder.scrollTop + App.NAVBAR_OFFSET;

    // Check which section is currently in view
    // Iterate in reverse order to find the topmost visible section
    const sections = Object.keys(this.sectionRefs);
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const sectionElement = this.sectionRefs[section].current;
      if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
        if (this.state.currentPage !== section) {
          this.setState({ currentPage: section });
        }
        break;
      }
    }
  }

  handlePageChange = (page) => {
    // Scroll to the section instead of switching pages
    const sectionElement = this.sectionRefs[page].current;
    if (sectionElement && this.contentHolderRef.current) {
      this.contentHolderRef.current.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return (React.createElement('div', { className: 'app', key: 'app' },
      [
        // Fixed navbar at top
        React.createElement('div', { className: 'navbar-container', key: 'navbar-container' },
          React.createElement(TopNavBar, { 
            key: 'navbar',
            currentPage: this.state.currentPage,
            onPageChange: this.handlePageChange
          })
        ),
        
        // Content holder showing all pages vertically
        React.createElement('div', { 
          className: 'content-holder', 
          key: 'content-holder',
          ref: this.contentHolderRef
        },
          React.createElement('div', { 
            className: 'page-content', 
            style: { backgroundColor: 'antiquewhite' }, 
            key: 'page-content' 
          },
            [
              React.createElement('div', { 
                key: 'about-section',
                ref: this.sectionRefs.about
              }, React.createElement(AboutPage, { key: 'about-page' })),
              React.createElement('div', { 
                key: 'experience-section',
                ref: this.sectionRefs.experience
              }, React.createElement(ExperiencePage, { key: 'experience-page' })),
              React.createElement('div', { 
                key: 'skills-section',
                ref: this.sectionRefs.skills
              }, React.createElement(SkillsPage, { key: 'skills-page' })),
              React.createElement('div', { 
                key: 'contact-section',
                ref: this.sectionRefs.contact
              }, React.createElement(ContactPage, { key: 'contact-page' }))
            ]
          )
        )
      ]
    ));
  }
}

export default App;
