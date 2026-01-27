import React from 'react';
import { Container, Row, Col, SafeAnchor } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import content from '../../content';

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
    const contactEmail = content.home.contactEmail;
    const mailToSubject = content.home.mailToSubject;
    const mailToLink = 'mailto:' + contactEmail + '?subject=' + mailToSubject;
    const firstName = content.home.firstName;
    const lastName = content.home.lastName;
    const resumeLink = content.home.resumeLink;

    const linkedinProfileUrl = content.home.socialLinks.linkedin;
    const stackoverFlowUrl = content.home.socialLinks.stackoverflow;
    const telegramLink = content.home.socialLinks.telegram;
    const githubLink = content.home.socialLinks.github;


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
      React.createElement('span', {}, content.home.contactEmailLabel),
      React.createElement('span', {}, React.createElement(SafeAnchor, { href: mailToLink }, contactEmail.toUpperCase())),
    ]);

    let resume_link_row = React.createElement(Row, { style: { marginBottom: '10vh' } }, [
      React.createElement('span', {}, React.createElement(SafeAnchor, { href: resumeLink, target: "_blank" }, content.home.resumeLinkLabel)),
    ]);

    let overviewDetails = this.getOverviewDetails();
    let overviewDetails_rows = [];
    overviewDetails.forEach(detail => {
      let detailedRow = React.createElement('li', {}, React.createElement('span', {}, detail));
      overviewDetails_rows.push(React.createElement(Row, { style: { marginTop: '2vh' } }, detailedRow));
    });


    let email_anchor = React.createElement(SafeAnchor, { href: mailToLink }, contactEmail);
    let contact_me_row = React.createElement(Row, { style: { marginTop: '2vh' } }, React.createElement('li', {}, React.createElement('span', {}, [content.home.contactMeText.replace('{email}', ''), email_anchor, content.home.contactMeText.split('{email}')[1] || ''])));
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
    content.home.overviewDetails.forEach(detail => {
      details.push(detail.replace('{experience}', currentExperience));
    });
    return details;
  }

  experienceCalculator(){
    return content.home.currentExperience;
  }

}
export default AboutPage