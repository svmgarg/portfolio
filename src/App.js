import './App.css';
import React from 'react';
import TopNavBar from './components/navbar/TopNavBar'
import AboutPage from './components/about/AboutPage'
import ExperiencePage from './components/experience/ExperiencePage';
import SkillsPage from './components/skills/SkillsPage';
import ContactPage from './components/contact/contactPage';

class App extends React.Component {

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
  }

  componentDidMount() {
    // Add scroll listener to detect which section is in view
    if (this.contentHolderRef.current) {
      this.contentHolderRef.current.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    // Clean up scroll listener
    if (this.contentHolderRef.current) {
      this.contentHolderRef.current.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    const contentHolder = this.contentHolderRef.current;
    if (!contentHolder) return;

    // Get the scroll position
    const scrollPosition = contentHolder.scrollTop + 100; // Offset for navbar

    // Check which section is currently in view
    const sections = ['about', 'experience', 'skills', 'contact'];
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
