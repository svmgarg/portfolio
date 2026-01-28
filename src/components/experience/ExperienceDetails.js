import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class ExperienceDetails extends React.Component {

    render() {
        let companyExperienceDetails = [];
        
        this.props.details.forEach((detail, companyIndex) => {
            let projectCards = [];
            
            detail.projects.forEach((project, projectIndex) => {
                let projectName = React.createElement('h5', { 
                    key: `${detail.id}-project-${project.id}-name`,
                    style: { color: '#bd5d38', marginBottom: '1rem' }
                }, project.name);
                
                let projectRole = React.createElement('h6', {
                    key: `${detail.id}-project-${project.id}-role`,
                    style: { color: '#6c757d', marginBottom: '1rem', fontWeight: 'normal' }
                }, project.role);
                
                let responsibilityList = [];
                project.responsiblities.forEach((responsiblity, respIndex) => {
                    responsibilityList.push(
                        React.createElement('li', { 
                            key: `${detail.id}-project-${project.id}-resp-${responsiblity.id}`,
                            style: { marginBottom: '0.5rem' }
                        }, responsiblity.value)
                    );
                });
                
                let projectCard = React.createElement(Card, {
                    key: `${detail.id}-project-${project.id}`,
                    style: { 
                        marginBottom: '1.5rem',
                        border: 'none',
                        borderLeft: '0.1875rem solid #bd5d38', /* Changed from 3px to rem */
                        paddingLeft: '1.5rem',
                        backgroundColor: 'transparent'
                    }
                }, React.createElement(Card.Body, { style: { padding: '0' } }, [
                    projectName,
                    projectRole,
                    React.createElement('ul', { 
                        key: `${detail.id}-project-${project.id}-list`,
                        style: { paddingLeft: '1.5rem' }
                    }, responsibilityList)
                ]));
                
                projectCards.push(projectCard);
            });

            let companyHeader = React.createElement(Row, {
                key: `${detail.id}-header`,
                style: { marginBottom: '1.5rem' }
            }, [
                React.createElement(Col, {
                    key: `${detail.id}-name-col`,
                    xs: 12,
                    md: 7
                }, React.createElement('h4', { 
                    style: { 
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        marginBottom: '0'
                    }
                }, detail.companyName)),
                React.createElement(Col, {
                    key: `${detail.id}-duration-col`,
                    xs: 12,
                    md: 5,
                    style: { textAlign: 'right' }
                }, React.createElement('span', { 
                    style: { 
                        fontSize: '1.1rem',
                        color: '#6c757d',
                        fontStyle: 'italic'
                    }
                }, detail.from + " - " + detail.to))
            ]);

            let companySection = React.createElement('div', {
                key: `company-${detail.id}`,
                style: { 
                    marginBottom: '3rem',
                    padding: '2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '0.5rem', /* Changed from 8px to rem */
                    boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.1)' /* Changed from px to rem */
                }
            }, [
                companyHeader,
                React.createElement('div', { key: `${detail.id}-projects` }, projectCards)
            ]);
            
            companyExperienceDetails.push(companySection);
        });

        return React.createElement('div', {}, companyExperienceDetails);
    }
}

export default ExperienceDetails