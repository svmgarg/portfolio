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
          React.createElement(Container, { key: 'skills-container', style: { marginTop: '0' } },
            React.createElement(Row, { style: { marginBottom: '3rem' }, key: 'skills-content' },
              React.createElement(Container, { key: 'skills-inner-container' }, [
                React.createElement(Row, { style: { marginBottom: '2rem' }, key: 'skills-subheader-row' }, programmingLanguageAndToolsTag),
                React.createElement(Row, { 
                  key: 'skills-icons-row', 
                  style: { 
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  } 
                }, iconList),
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
      { name: 'React', iconName: Icons.DiReact },
      { name: 'Apache Spark', iconName: null, customIcon: true }
    ];


    let iconList = [];
    iconDetails.forEach((iconDetail, index) => {
      let iconElement;
      if (iconDetail.customIcon) {
        // Use the custom Apache Spark logo
        iconElement = React.createElement('img', {
          src: '/apache-spark-logo.svg',
          alt: iconDetail.name,
          style: {
            width: iconSize,
            height: iconSize,
            marginBottom: '0.5rem'
          },
          onError: (e) => {
            e.target.style.display = 'none';
            console.error('Failed to load Apache Spark logo');
          },
          key: `skill-icon-${index}`
        });
      } else {
        iconElement = React.createElement(iconDetail.iconName, { 
          size: iconSize, 
          key: `skill-icon-${index}`,
          style: { marginBottom: '0.5rem' }
        });
      }
      
      iconList.push(
        React.createElement('div', { 
          style: { 
            margin: '2vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '120px'
          }, 
          key: `skill-${index}` 
        }, [
          iconElement,
          React.createElement('p', { 
            style: { 
              fontSize: '1.2rem', 
              textAlign: 'center',
              margin: '0',
              fontWeight: '500'
            }, 
            key: `skill-name-${index}` 
          }, iconDetail.name)
        ])
      );
    });


    return iconList;

  }

}
export default SkillsPage