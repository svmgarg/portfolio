import React from 'react';
import { Container, Row, Col, SafeAnchor } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import content from '../../content';

class AboutPage extends React.Component {



  render() {
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

    let socialLinks = [linkedinProfileUrl, stackoverFlowUrl, telegramLink, githubLink];
    let socialIcons = [];
    socialLinks.forEach((link, index) => {
      let socialIcon = React.createElement(SocialIcon, { url: link, target: "_blank", key: `social-${index}` });
      socialIcons.push(React.createElement(Col, { style: { flexGrow: 0 }, key: `col-social-${index}` }, socialIcon));
    });
    let socialIconsRow = React.createElement(Row, { style: { marginTop: '8vh', marginBottom: '2vh', maxHeight: '6vh' }, key: 'social-row' }, socialIcons);

    let firstName_lastName_row = React.createElement(Row, { style: { marginTop: '9vh' }, key: 'name-row' }, [
      React.createElement('span', { style: headerTextStyle, key: 'firstName' }, firstName),
      React.createElement('span', { style: { ...headerTextStyle, ...headerTextStyle2 }, key: 'lastName' }, lastName),
    ]);

    let email_row = React.createElement(Row, { key: 'email-row' }, [
      React.createElement('span', { key: 'email-label' }, content.home.contactEmailLabel),
      React.createElement('span', { key: 'email-link-span' }, React.createElement(SafeAnchor, { href: mailToLink, key: 'email-link' }, contactEmail.toUpperCase())),
    ]);

    let resume_link_row = React.createElement(Row, { style: { marginBottom: '10vh' }, key: 'resume-row' }, [
      React.createElement('span', { key: 'resume-span' }, React.createElement(SafeAnchor, { href: resumeLink, target: "_blank", key: 'resume-link' }, content.home.resumeLinkLabel)),
    ]);

    let overviewDetails = this.getOverviewDetails();
    let overviewDetails_rows = [];
    overviewDetails.forEach((detail, index) => {
      let detailedRow = React.createElement('li', { key: `detail-li-${index}` }, React.createElement('span', { key: `detail-span-${index}` }, detail));
      overviewDetails_rows.push(React.createElement(Row, { style: { marginTop: '2vh' }, key: `detail-row-${index}` }, detailedRow));
    });


    let email_anchor = React.createElement(SafeAnchor, { href: mailToLink, key: 'contact-email-link' }, contactEmail);
    let contact_me_row = React.createElement(Row, { style: { marginTop: '2vh' }, key: 'contact-row' }, React.createElement('li', { key: 'contact-li' }, React.createElement('span', { key: 'contact-span' }, [
      React.createElement('span', { key: 'contact-prefix' }, content.home.contactMePrefix),
      email_anchor,
      React.createElement('span', { key: 'contact-suffix' }, content.home.contactMeSuffix)
    ])));
    overviewDetails_rows.push(contact_me_row);

    return (
      React.createElement('div', { className: 'page-section', style: defaultTextStyle, id: 'aboutPageSection', key: 'aboutPageSection' }, [
        React.createElement(Container, { key: 'about-container' }, [
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