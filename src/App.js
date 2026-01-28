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
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  }

  renderCurrentPage() {
    const { currentPage } = this.state;
    
    switch (currentPage) {
      case 'about':
        return React.createElement(AboutPage, { key: 'about-page' });
      case 'experience':
        return React.createElement(ExperiencePage, { key: 'experience-page' });
      case 'skills':
        return React.createElement(SkillsPage, { key: 'skills-page' });
      case 'contact':
        return React.createElement(ContactPage, { key: 'contact-page' });
      default:
        return React.createElement(AboutPage, { key: 'about-page' });
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
        
        // Single content holder showing one page at a time
        React.createElement('div', { className: 'content-holder', key: 'content-holder' },
          React.createElement('div', { 
            className: 'page-content', 
            style: { backgroundColor: 'antiquewhite' }, 
            key: 'page-content' 
          },
            this.renderCurrentPage()
          )
        )
      ]
    ));
  }
}

export default App;
