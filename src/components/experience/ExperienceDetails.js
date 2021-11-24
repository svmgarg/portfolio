import React from 'react';
import {  Row, Col } from 'react-bootstrap';

class ExperienceDetails extends React.Component {



    render() {

       

        let companyExperienceDetails = [];
        this.props.details.forEach( (detail, index) =>  {
            let projectDetails = [];
            detail.projects.forEach( (project, index) => {
                let projectName = React.createElement('span', {key : project.id+"-projectName"}, project.name + " - " + project.role);
                let responsiblityList = [];
                project.responsiblities.forEach( (responsiblity, index) => {
                    responsiblityList.push(React.createElement('li', {key : responsiblity.id }, responsiblity.value));
                });
                let projectDetail = React.createElement('li', { key: project.id, style : {marginBottom : '2vh'} }, [
                    projectName,
                    React.createElement('ul', { key : project.id+"-responsiblityList",type: "circle" }, responsiblityList)
                ]);
                projectDetails.push(projectDetail);
            });

            let companyName = React.createElement(Col, {}, React.createElement('span', { key: detail.id+"-companyName", style: { fontSize: "1.5rem" } }, detail.companyName));
            let duration = React.createElement(Col, { key : detail.id+"-duration", style: { textAlign: "end" } }, React.createElement('span', {key : index}, detail.from + " to " + detail.to));
            let companyExperienceDetail = React.createElement('li', { key:detail.id, style : {marginBottom : '4vh'} },    
                    [ React.createElement(Row, { style : { width: '100%'}}, [companyName, duration]),
                      React.createElement(Row, {}, [React.createElement('ul', { key: detail.id+"-projectDetails",type: "disc" }, projectDetails)])
                    ])
            companyExperienceDetails.push(companyExperienceDetail);
        });

        return (

            React.createElement('ul', { type: "square" }, companyExperienceDetails)

        );
    }
}
export default ExperienceDetails