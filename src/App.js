import './App.css';
import React from 'react';
import { Container } from 'react-bootstrap'
import SideBar from './components/sidebar/SideBar'
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

    return (
      <div onScroll={this.onScroll} className='app' >

        <Container fluid style={{ paddingLeft: '0px', paddingRight: '0px' }}>

          <div id="sidePane"  >
            <SideBar />
          </div>

          <div id="contentPane" >
            <AboutPage />
            <hr />

            <ExperiencePage />
            <hr />

            <SkillsPage />
            <hr />

            <ContactPage />
          

          </div>
        </Container>

      </div>
    );
  };




}

export default App;
