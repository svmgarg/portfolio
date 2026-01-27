import React from 'react';
import { Container, Row } from 'react-bootstrap';
import * as Icons from "react-icons/di";
import content from '../../content';



class SkillsPage extends React.Component {


  render() {
    const headerTextStyle = { fontSize: '3rem', marginBottom: '2rem', fontWeight: 'bold' };
    const subheadingStyle = { fontSize: '2rem', marginBottom: '2rem' };
    let headerTag = React.createElement('span', { style: headerTextStyle, key: 'skills-header' }, content.skills.heading);
    let programmingLanguageAndToolsTag = React.createElement('span', { style: subheadingStyle, key: 'skills-subheader' }, content.skills.subheading);
    let iconList = this.getIconList();


    return (

      React.createElement('div', { className: 'page-section', id: 'skillsPageSection', key: 'skillsPageSection' },
        [
          React.createElement('div', { className: 'scroll-tracker', id: 'skillsPageTracker', key: 'skillsPageTracker' }),
          React.createElement(Container, { key: 'skills-container' }, [
            React.createElement(Row, { style: { marginBottom: '3rem' }, key: 'skills-header-row' }, headerTag),
            React.createElement(Row, { style: { marginBottom: '3rem' }, key: 'skills-content' },
              React.createElement(Container, { key: 'skills-inner-container' }, [
                React.createElement(Row, { style: { marginBottom: '2rem' }, key: 'skills-subheader-row' }, programmingLanguageAndToolsTag),
                React.createElement(Row, { key: 'skills-icons-row', style: { justifyContent: 'center' } }, iconList),
              ])
            )
          ]
          )

        ]
      )
    );
  };




  getIconList() {
    let iconSize = '6em';
    let iconDetails = [
      { name: 'Java', iconName: Icons.DiJava },
      { name: 'GIT', iconName: Icons.DiGit },
      { name: 'Docker', iconName: Icons.DiDocker },
      { name: 'Javascript', iconName: Icons.DiJavascript },
      { name: 'React', iconName: Icons.DiReact }
    ];


    let iconList = [];
    iconDetails.forEach(iconDetail =>
      iconList.push(
        React.createElement('div', { style: { margin: '2vh' } }, [
          React.createElement(iconDetail.iconName, { size: iconSize }),
          React.createElement('p', { style: { fontSize: '1.5rem', textAlign: 'center' } }, iconDetail.name)
        ])
      ));


    return iconList;

  }

}
export default SkillsPage