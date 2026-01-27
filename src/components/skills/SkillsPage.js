import React from 'react';
import { Container, Row } from 'react-bootstrap';
import * as Icons from "react-icons/di";
import content from '../../content';



class SkillsPage extends React.Component {


  render() {
    const subheadingStyle = { fontSize: '2rem', marginBottom: '2rem' };
    let programmingLanguageAndToolsTag = React.createElement('span', { style: subheadingStyle, key: 'skills-subheader' }, content.skills.subheading);
    let iconList = this.getIconList();


    return (

      React.createElement('div', { className: 'page-section', id: 'skillsPageSection', key: 'skillsPageSection' },
        [
          React.createElement('div', { className: 'scroll-tracker', id: 'skillsPageTracker', key: 'skillsPageTracker' }),
          React.createElement(Container, { key: 'skills-container' },
            React.createElement(Row, { style: { marginBottom: '3rem' }, key: 'skills-content' },
              React.createElement(Container, { key: 'skills-inner-container' }, [
                React.createElement(Row, { style: { marginBottom: '2rem' }, key: 'skills-subheader-row' }, programmingLanguageAndToolsTag),
                React.createElement(Row, { key: 'skills-icons-row', style: { justifyContent: 'center' } }, iconList),
              ])
            )
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
    iconDetails.forEach((iconDetail, index) =>
      iconList.push(
        React.createElement('div', { style: { margin: '2vh' }, key: `skill-${index}` }, [
          React.createElement(iconDetail.iconName, { size: iconSize, key: `skill-icon-${index}` }),
          React.createElement('p', { style: { fontSize: '1.5rem', textAlign: 'center' }, key: `skill-name-${index}` }, iconDetail.name)
        ])
      ));


    return iconList;

  }

}
export default SkillsPage