import React from 'react';
import { Container, Row, Col, SafeAnchor } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class AboutPage extends React.Component {



  render() {
    const aboutPageStyle = {
      minHeight: '100vh',
      width: '100%',
      padding: '4%'
    };

    const defaultTextStyle = { fontSize: '1.3rem' };

    const headerTextStyle = { fontSize: '5rem', marginBottom: '0vh' };
    const headerTextStyle2 = { color: '#bd5d38', marginBottom: '0vh', marginLeft: '2vw' };
    const contactEmail = 'svmgarg@gmail.com';
    const mailToSubject = '';
    const mailToLink = 'mailto:' + contactEmail + '?subject=' + mailToSubject;
    const firstName = 'Shivam';
    const lastName = 'Garg';
    const resumeLink = 'https://drive.google.com/file/d/0B_L5PyR_-ntmdGpxMDFaN0FRRW1hQzFiaGhXWl9wbHFYcHBv/view?usp=sharing&resourcekey=0-YR5VAPGLuBP4lUW-oRliKA';

    const linkedinProfileUrl = "https://www.linkedin.com/in/svmgarg/";
    const stackoverFlowUrl = "https://stackoverflow.com/users/5474413/shivam";
    const telegramLink = "https://telegram.me/svmgarg";
    const githubLink = "https://github.com/svmgarg/";


    let headingTracker = React.createElement('div', { className: "scroll-tracker", id: "aboutPageTracker" });



    let socialLinks = [linkedinProfileUrl, stackoverFlowUrl, telegramLink, githubLink];
    let socialIcons = [];
    socialLinks.forEach(link => {
      let socialIcon = React.createElement(SocialIcon, { url: link, target: "_blank" });
      socialIcons.push(React.createElement(Col, { style: { flexGrow: 0 } }, socialIcon));
    });
    let socialIconsRow = React.createElement(Row, { style: { marginTop: '8vh', marginBottom: '2vh', maxHeight: '6vh' } }, socialIcons);

    let firstName_lastName_row = React.createElement(Row, { style: { marginTop: '9vh' } }, [
      React.createElement('span', { style: headerTextStyle }, firstName),
      React.createElement('span', { style: { ...headerTextStyle, ...headerTextStyle2 } }, lastName),
    ]);

    let email_row = React.createElement(Row, {}, [
      React.createElement('span', {}, 'Contact Email  \u00a0-\u00a0\u00a0'),
      React.createElement('span', {}, React.createElement(SafeAnchor, { href: mailToLink }, contactEmail.toUpperCase())),
    ]);

    let resume_link_row = React.createElement(Row, { style: { marginBottom: '10vh' } }, [
      React.createElement('span', {}, React.createElement(SafeAnchor, { href: resumeLink, target: "_blank" }, 'View PDF Resume')),
    ]);

    let overviewDetails = this.getOverviewDetails();
    let overviewDetails_rows = [];
    overviewDetails.forEach(detail => {
      let detailedRow = React.createElement('li', {}, React.createElement('span', {}, detail));
      overviewDetails_rows.push(React.createElement(Row, { style: { marginTop: '2vh' } }, detailedRow));
    });


    let email_anchor = React.createElement(SafeAnchor, { href: mailToLink }, contactEmail);
    let contact_me_row = React.createElement(Row, { style: { marginTop: '2vh' } }, React.createElement('li', {}, React.createElement('span', {}, ['Contact me via ', email_anchor, ' or via the Contact form below'])));
    overviewDetails_rows.push(contact_me_row);

    return (
      React.createElement('div', { style: { ...aboutPageStyle, ...defaultTextStyle } }, [
        headingTracker,
        React.createElement(Container, {}, [
          firstName_lastName_row,
          email_row,
          resume_link_row,
          overviewDetails_rows,
          socialIconsRow
        ])
      ])
    );

  }


  getOverviewDetails() {
    let currentExperience = this.experienceCalculator();
    let details = [];
    details.push('I am currently working as a Senior Software Engineer in Oracle.');
    details.push('I currently have {experience} of experience in the IT industry'.replace('{experience}', currentExperience));
    details.push('Enthusiastic about Frontend development, which is why I started this portfolio');

    return details;
  }

  experienceCalculator(){
    return '7 years and 6 months';
  }

}
export default AboutPage