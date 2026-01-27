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

    return (React.createElement('div', { onScroll: this.onScroll, className: 'app' },

      React.createElement('div', { className: 'container-fluid', style: { paddingLeft: '0px', paddingRight: '0px' } },
        [
          React.createElement(TopNavBar),
          React.createElement('div', { id: "contentPane", style: {  "backgroundColor" : "antiquewhite"
          } },
            [
              React.createElement(AboutPage),
              React.createElement('hr'),
              React.createElement(ExperiencePage),
              React.createElement('hr'),
              React.createElement(SkillsPage),
              React.createElement('hr'),
              React.createElement(ContactPage)
            ])
        ])
    ));
  };



}

export default App;
