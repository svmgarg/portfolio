import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ExperienceDetails from './ExperienceDetails'

class ExperiencePage extends React.Component {

 

  render() {
    const experiencePageStyle = {
      minHeight: '100vh',
      width: '100%',
      padding: '4%'
    };

    const headerTextStyle = { fontSize: '3rem', marginBottom: '0vh' };

    let details = this.getExperienceDetails();

    return (
      <div style={experiencePageStyle}>
        <div className="scroll-tracker" id="experiencePageTracker" />
        <Container>

          <Row style={{ marginBottom: '4vh' }}>
            <span style={headerTextStyle}> Experience</span>
          </Row>
          <ExperienceDetails details={details} />

        </Container>

      </div>
    );
  };

  getExperienceDetails() {


    let oracle = {
      id :  1,
      companyName : "Oracle Corp", 
      from : "Jul 2019",
      to : "Present",
      projects : [
        { 
        id :  1,
        name : "Eloqua Marketing Automation cloud", 
        role : "Backend Developer",
        responsiblities : [
          {
            id :  1,
            value : "Adding new features and enhancing existing features in existing apps(integrations) with various third party platforms like Salesforce, Oracle CX Sales.", 
          },
          {
            id :  2,
            value : "Actively involved in migration of legacy code to Spring boot.",
          },{
            id :  3,
            value : "Handling the OSC Bulk API Integration with Eloqua for data Import and Export.",
          },
          {
            id :  4,
            value : "Adding new Integration between Salesforce and Eloqua."
          }
        ]
      }
    ]
    };

    let harman = {
      id :  2,
      companyName : "Harman Connected Services", 
      from : "Dec 2017",
      to : "Jun 2019",
      projects : [
        { 
        id :  1,
        name : "Harman - Ignite Platform", 
        role : "Backend Developer",
        responsiblities : [
          {
            id :  1,
            value : "Actively involved in all phases of project from development to deployment", 
          },
          {
            id :  2,
            value : "Created Micro services(Spring-boot, Spring-data, Spring-mongo, docker, Swagger-UI) for ignite platform",
          },{
            id :  3,
            value : "Designed and implemented various micro-service and inter-communication between them",
          },
          {
            id :  4,
            value : "Engaged in various code optimization task using sonar-qube"
          }
        ]
      },
      { 
        id :  2,
        name : "Panasonic - Home Automation", 
        role : "Backend Developer",
        responsiblities : [
          {
            id :  1,
            value : "Exposed Rest-API for Mobile App to communicate to IOT device via cloud", 
          },
          {
            id :  2,
            value : "Integrated various modules like Spring-data-JPA, spring-data-mongo, Swagger-UI, Quartz Scheduler in application",
          },{
            id :  3,
            value : "Designed and implemented framework for scheduling commands to IOT device",
          },
          {
            id :  4,
            value : "Implemented Admin Dashboard in Angular along with Firebase integration for managing user, device, sensors."
          },
          {
            id :  5,
            value : "Managing AWS Services for deployment"
          }
        ]
      }
    ]
    };

    let tcs = {
      id :  3,
      companyName : "Tata Consultancy Services", 
      from : "Jul 2015",
      to : "Dec 2017",
      projects : [
        { 
        id :  1,
        name : "TalkTalk Group - CRM Application", 
        role : "Backend Developer",
        responsiblities : [
          {
            id :  1,
            value : "Exposed Rest-API for Customer Relation Management Application.", 
          },
          {
            id :  2,
            value : "Development of Purging Old Data Module from database using PL\\SQL, Shell script.",
          },{
            id :  3,
            value : "Involved in Project Development, Optimization, Unit Testing and Deployment Stages.",
          },
          {
            id :  4,
            value : "Development of Customer’s Order Admin Application using Spring-MVC."
          }
        ]
      }
    ]
    };
    
    
    let details = [];
    details.push(oracle);
    details.push(harman);
    details.push(tcs);
   

    
    return details;


  };
}
export default ExperiencePage