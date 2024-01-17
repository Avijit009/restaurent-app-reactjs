import React, { Component } from "react";
import { Form, FormGroup, Button, Label, Input, Col } from "reactstrap";
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
    };
    // bind this to prevent writing more code for the same thting
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <div
          className="row row-content"
          style={{
            paddingLeft: "20px",
            textAlign: "left",
          }}
        >
          <div
            className="col-12"
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Send Us Your Feedback
          </div>

            <hr/>
            
          <div className="col-12">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  Telephone Number
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    name="telnum"
                    placeholder="Telephone Number"
                    value={this.state.telnum}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email Id
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />
                      <strong> May we contact you? </strong>
                    </Label>
                  </FormGroup>
                </Col>

                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    checked={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    name="message"
                    placeholder="Feedback"
                    value={this.state.message}
                    rows="12"
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row style={{ textAlign: "center" }}>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
