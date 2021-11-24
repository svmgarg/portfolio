import React from 'react';
import { Container, Row, Image } from 'react-bootstrap'

class SideBar extends React.Component {

    
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
      }

constructor(props){
    super(props);
    this.state = {
        currentActive : "aboutPage",
    }

}
    render() {
        const sideBarStyle = {
            backgroundColor: '#bd5d38',
            height: '100vh',
            width: '100%'
        };

        const textStyle = {
            backgroundColor: '#bd5d38',
            height: '100vh',
            width: '100%'
        };

        const alignCenterstyle={ justifyContent: 'Center', alignItems: 'Center' };

        return (
            <div style={sideBarStyle}>
                <Container>
                    <Row style={{ height: '10vh' }} />
                    <Row style={{ height: '40vh', justifyContent: 'Center', alignItems: 'Center', pointerEvents: 'none' }} >
                        {/* <ReactRoundedImage style={{maxHeight: '90%', maxWidth : '90%'}}
                            image="https://kelvinwilliams.dev/img/profile.png"
                            roundedColor="#cc7d62"
                            hoverColor="#cc7d62"
                        /> */}

                        <Image  style={{ maxHeight: '75%', maxWidth: '75%', padding : '0.6rem', backgroundColor: '#cc7d62'}} src= "https://kelvinwilliams.dev/img/profile.png" roundedCircle>

                        </Image>
                    </Row>

                    <Row className="scroll-sidebar sidebar-active" id="aboutPage" style={{...alignCenterstyle }} > <span>ABOUT</span></Row>
                    <Row style={{ height: '2vh' }} />

                    <Row className="scroll-sidebar" id="experiencePage" style={alignCenterstyle} > <span>EXPERIENCE</span></Row>
                    <Row style={{ height: '2vh' }} />

                    <Row className="scroll-sidebar" id="skillsPage" style={alignCenterstyle} > <span>SKILLS</span></Row>
                    <Row style={{ height: '2vh' }} />

                    <Row className="scroll-sidebar" id="contactPage" style={alignCenterstyle} > <span>CONTACT</span></Row>
                    <Row style={{ height: '2vh' }} />

                </Container>


            </div>
        );
    }

    onScroll = (e) => {
        let elements  = Array.from(document.getElementsByClassName("scroll-tracker"));
        elements.forEach(element => {
            if(this.isInViewport(element)){
                console.log("In View Port ==> " +  element.id);
                let sideBarName = element.id.replace("Tracker", "");
                let currentActive = this.state.currentActive;
                if(currentActive !== sideBarName){
                    console.log( "currentActive : " + currentActive);
                    console.log( "sideBarName : " + sideBarName);
                    if(this.state.sideBarMap == null ){
                        let sideBarMap = new Map();
                        let sidebarMenus  = Array.from(document.getElementsByClassName("scroll-sidebar"));
                        sidebarMenus.forEach(tempElement => {
                            sideBarMap.set(tempElement.id, tempElement);
                        });
                        sideBarMap.get(sideBarName).classList.add("sidebar-active");
                        sideBarMap.get(currentActive).classList.remove("sidebar-active");
                        
                        this.setState({ 
                            sideBarMap : sideBarMap,
                            currentActive : sideBarName})
                    }else{
                        this.state.sideBarMap.get(sideBarName).classList.add("sidebar-active");
                        this.state.sideBarMap.get(currentActive).classList.remove("sidebar-active");
                        this.setState({ currentActive : sideBarName})
                    }
                    

                    

                }
            }

        });
        
    
      };

      isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)      
        );
    }
    
}
export default SideBar