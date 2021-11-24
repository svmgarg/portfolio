import React from 'react';
import { Container, Row } from 'react-bootstrap';
import * as Icons from "react-icons/di";



class SkillsPage extends React.Component {


  render() {
    const skillsPageStyle = {
      minHeight: '100vh',
      width: '100%',
      padding: '4%'
    };

    const headerTextStyle = { fontSize: '3rem', marginBottom: '0vh' };
    const subheadingStyle = { fontSize: '2rem', marginBottom: '0vh' };
    let headerTag = React.createElement('span', { style: headerTextStyle }, 'Skills');
    let programmingLanguageAndToolsTag = React.createElement('span', { style: subheadingStyle }, 'Programming Language and Tools');
    let iconList = this.getIconList();
  

    return (

      React.createElement('div', { style: skillsPageStyle },
        [
          React.createElement('div', { className: 'scroll-tracker', id: 'skillsPageTracker' }),
          React.createElement(Container, {}, [
            React.createElement(Row, { style: { marginBottom: '4vh' } }, headerTag),
            React.createElement(Row, { style: { marginBottom: '4vh' } },
            React.createElement(Container, {},  [
                React.createElement(Row, {style: { marginBottom: '4vh' }} , programmingLanguageAndToolsTag),
                React.createElement(Row, {} , iconList ),
              ])
            )
          ]
          )

        ]
      )
    );
  };




  getIconList(){
    let iconSize = '6em';
    let iconDetails = [
      {name : 'Java', iconName : Icons.DiJava},
      {name : 'GIT', iconName : Icons.DiGit},
      {name : 'Docker', iconName : Icons.DiDocker},
      {name : 'Javascript', iconName : Icons.DiJavascript},
      {name : 'React', iconName : Icons.DiReact}
    ];

    
    let iconList = [];
    iconDetails.forEach(iconDetail => 
      iconList.push( 
        React.createElement('div', { style: { margin: '2vh' } }, [
          React.createElement(iconDetail.iconName, {size:iconSize}),
          React.createElement('p', { style: {fontSize: '1.5rem', textAlign : 'center'}}, iconDetail.name)
        ])  
      ));
        
    
    return iconList;
    
  }

}
export default SkillsPage