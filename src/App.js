import './App.css';
import React from 'react';
import TopNavBar from './components/navbar/TopNavBar'
import AboutPage from './components/about/AboutPage'
import ExperiencePage from './components/experience/ExperiencePage';
import SkillsPage from './components/skills/SkillsPage';
import ContactPage from './components/contact/contactPage';

class App extends React.Component {

  componentDidMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }

  render() {

    return (React.createElement('div', { className: 'app', key: 'app' },
      [
        // First div: Fixed navbar at top
        React.createElement('div', { className: 'navbar-container', key: 'navbar-container' },
          React.createElement(TopNavBar, { key: 'navbar' })
        ),
        
        // Second div: Scrollable content container
        React.createElement('div', { className: 'content-scroll-container', key: 'content-scroll-container' },
          React.createElement('div', { className: 'container-fluid', style: { paddingLeft: '0px', paddingRight: '0px' }, key: 'main-container' },
            React.createElement('div', { id: "contentPane", style: { "backgroundColor": "antiquewhite" }, key: 'content-pane' },
              [
                React.createElement(AboutPage, { key: 'about-page' }),
                React.createElement('hr', { key: 'hr-1' }),
                React.createElement(ExperiencePage, { key: 'experience-page' }),
                React.createElement('hr', { key: 'hr-2' }),
                React.createElement(SkillsPage, { key: 'skills-page' }),
                React.createElement('hr', { key: 'hr-3' }),
                React.createElement(ContactPage, { key: 'contact-page' })
              ]
            )
          )
        )
      ]
    ));
  };



}

export default App;
