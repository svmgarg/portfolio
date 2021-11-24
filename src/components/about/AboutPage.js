import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

class AboutPage extends React.Component {



  render() {
    const aboutPageStyle = {
      minHeight: '100vh',
      width: '100%',
      padding: '4%'
    };

    const defaultTextStyle = {fontSize: '1.3rem' };

    const headerTextStyle = { fontSize: '5rem', marginBottom:'0vh'};
    const headerTextStyle2 = { color: '#bd5d38', marginBottom:'0vh', marginLeft: '2vw' };
    const contactEmail = 'svmgarg@gmail.com';
    const mailToSubject = '';
    const mailToLink = 'mailto:' + contactEmail + '?subject=' + mailToSubject;
    const firstName = 'Shivam';
    const lastName = 'Garg';
    const resumeLink = 'https://drive.google.com/file/d/0B_L5PyR_-ntmdGpxMDFaN0FRRW1hQzFiaGhXWl9wbHFYcHBv/view?usp=sharing&resourcekey=0-YR5VAPGLuBP4lUW-oRliKA';
    
    const linkedinProfileUrl = "https://www.linkedin.com/in/svmgarg/";


    return (
      <div style={{...aboutPageStyle, ...defaultTextStyle}}>
        <div className="scroll-tracker" id="aboutPageTracker" />
        <Container>

          <Row style={{marginTop : '9vh'}}>
            <span style={headerTextStyle}>{firstName}</span>
            <span style={{ ...headerTextStyle, ...headerTextStyle2 }}>{lastName}</span>
          </Row>

          <Row>
            <span >Contact Email   -&nbsp;&nbsp;</span>
            <span > <a href={mailToLink} > {contactEmail.toUpperCase()} </a> </span>
          </Row>

          <Row>
            <span > <a href={resumeLink} rel="noreferrer" target="_blank" >View PDF Resume</a> </span>
          </Row>


          <Row style={{marginTop : '8vh'}} ><li><span> Currently working as a backend developer (Java and Spring microservice) in Oracle. </span></li></Row>


          <Row  style={{marginTop : '2vh'}}><li><span> Currently holding 6 years of experience in IT industry </span> </li> </Row>
          
          <Row style={{marginTop : '2vh'}}><li><span>Available for freelance opportunities.</span> </li> </Row>
          
          <Row style={{marginTop : '2vh'}}><li><span>Enthusiastic about Frontend development, which is why I started this portfolio </span></li> </Row>
          
          <Row style={{marginTop : '2vh'}}><li><span> Contact me via <span > <a href={mailToLink} > {contactEmail} </a> </span>   or via the Contact form below</span></li></Row>
          

          <Row style={{marginTop : '8vh', marginBottom: '2vh',maxHeight :'6vh'}}>  
            <Col style={{flexGrow :0}}> <SocialIcon  url={linkedinProfileUrl} target="_blank"  ></SocialIcon>  </Col>
            <Col style={{flexGrow :0}}> <SocialIcon  url="https://stackoverflow.com/users/5474413/shivam" target="_blank"  ></SocialIcon>   </Col>
            <Col style={{flexGrow :0}}> <SocialIcon  url="https://telegram.me/svmgarg" target="_blank"  ></SocialIcon>   </Col>
          
           </Row>


        </Container>

      </div>
    );
  }
}
export default AboutPage