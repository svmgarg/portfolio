import React from 'react';
import * as RB from 'react-bootstrap';
import { Container, Row, Button } from 'react-bootstrap';
import content from '../../content';



class ContactPage extends React.Component {
  state = {
    message: ""
  };

  onSubmit() {
    console.log(this.state.message);
    let message = this.state.message;
    window.location.href = 'mailto:' + content.home.contactEmail + '?subject=' + content.contact.emailSubject + '&body=' + message;

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
    const subheadingStyle = { fontSize: '1.4rem', marginBottom: '1rem' };
    let contactMeifyou = React.createElement('span', { style: subheadingStyle, key: 'contact-subheader' }, content.contact.subheading);
    let contactMeConditions = content.contact.conditions;
    let contactMeConditionsElements = [];
    contactMeConditions.forEach((condition, index) => {
      contactMeConditionsElements.push(React.createElement('li', { key: `condition-${index}` }, condition));
    });
    var self = this;


    return (

      React.createElement('div', { className: 'page-section', id: 'contactPageSection', key: 'contactPageSection' },
        [
          React.createElement(Container, { key: 'contact-container', style: { marginTop: '0' } }, [
            React.createElement(Row, { style: { marginBottom: '2rem' }, key: 'contact-intro' },
              React.createElement(Container, { key: 'contact-intro-container' }, [
                React.createElement(Row, { style: { marginBottom: '1rem' }, key: 'contact-intro-header' }, contactMeifyou),
                React.createElement(Row, { key: 'contact-conditions' }, React.createElement('ul', { key: 'conditions-list' }, contactMeConditionsElements)),
              ])
            ),

            React.createElement(Row, { style: { marginBottom: '2rem' }, key: 'contact-form-row' },
              React.createElement(RB.Form, { key: 'contact-form' }, [
                React.createElement(RB.Form.Group, { style: { fontSize: '1.2rem' }, key: 'form-group' }, [
                  React.createElement(RB.Form.Label, { key: 'form-label' }, content.contact.formLabel),
                  React.createElement(RB.Form.Control, { key: 'form-control', style: { "backgroundColor": "aliceblue" }, as: 'textarea', size: 'lg', cols: 100, rows: 5, value: self.state.message, onChange: self.messageChanged.bind(self) }),
                  React.createElement(RB.Form.Label, { key: 'char-count', style: { fontSize: '0.8rem', float: 'right' } }, content.contact.characterCountLabel.replace('{count}', this.state.message != null ? this.state.message.length : 0)),
                ]),
                React.createElement(RB.Form.Group, { key: 'form-button-group' }, React.createElement(Button, { type: 'submit', onClick: self.onSubmit.bind(self), key: 'submit-button' }, content.contact.buttonLabel)),
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