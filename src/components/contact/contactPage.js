import React from 'react';
import * as RB from 'react-bootstrap';
import { Container, Row, Button } from 'react-bootstrap';



class ContactPage extends React.Component {
  state = {
    message: ""
  };

  onSubmit() {
    console.log(this.state.message);
    let message = this.state.message;
    window.location.href = 'mailto:svmgarg@gmail.com?subject=Hi Shivam&body=' + message;

  };


  messageChanged(e) {
    let value = e.target.value;
    console.log("value is :::" + e.target.value + ":::");
    if (value !== undefined && value !== null && value.length > 0) {
      if (value.length > 400) {
        value = value.substring(0, 400);
      }
    }
    this.setState({ message: value });
    console.log(this.state.message);

  };



  render() {
    const contactPageStyle = {
      minHeight: '100vh',
      width: '100%',
      padding: '4%'
    };

    const headerTextStyle = { fontSize: '3rem', marginBottom: '0vh' };
    const subheadingStyle = { fontSize: '1.4rem', marginBottom: '0vh' };
    let headerTag = React.createElement('span', { style: headerTextStyle }, 'Contact');
    let contactMeifyou = React.createElement('span', { style: subheadingStyle }, 'Contact me if you');
    let contactMeConditions = ["need to hire a versatile freelance software developer.",
      "have any questions and want to find out more about the services I provide.",
      "just want to say 'hello'."
    ];
    let contactMeConditionsElements = [];
    contactMeConditions.forEach(condition => {
      contactMeConditionsElements.push(React.createElement('li', {}, condition));
    });
    var self = this;


    return (

      React.createElement('div', { style: contactPageStyle },
        [
          React.createElement('div', { className: 'scroll-tracker', id: 'contactPageTracker' }),
          React.createElement(Container, {}, [
            React.createElement(Row, { style: { marginBottom: '3vh' } }, headerTag),
            React.createElement(Row, { style: { marginBottom: '3vh' } },
              React.createElement(Container, {}, [
                React.createElement(Row, { style: { marginBottom: '2vh' } }, contactMeifyou),
                React.createElement(Row, {}, React.createElement('ul', {}, contactMeConditionsElements)),
              ])
            ),

            React.createElement(Row, { style: { marginBottom: '3vh' } },
              React.createElement(RB.Form, {}, [
                React.createElement(RB.Form.Group, { style: { fontSize: '1.2rem' } }, [
                  React.createElement(RB.Form.Label, {}, "Your Message"),
                  React.createElement(RB.Form.Control, {  style: {  "backgroundColor" : "aliceblue"}, as: 'textarea', size: 'lg', cols: 100, rows: 5, value: self.state.message, onChange: self.messageChanged.bind(self) }),
                  React.createElement(RB.Form.Label, { style: { fontSize: '0.8rem', float: 'right' } }, "(" + (this.state.message != null ? this.state.message.length : 0) + " of 400)"),
                ]),
                React.createElement(RB.Form.Group, {}, React.createElement(Button, { type: 'submit', onClick: self.onSubmit.bind(self) }, "Send")),
              ])
            )
          ]
          )

        ]
      )
    );
  };

}
export default ContactPage