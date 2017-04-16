const React = require("react");
const { connect } = require("react-redux");
const { string, func } = require("prop-types");
const { request } = require("../nontrivial-prop-types");
const { Grid, Row, Col, Form, FormGroup, FormControl } = require("react-bootstrap");

const RequestButton = require("../Utils/RequestButton");
const ErrorMessage = require("../Utils/ErrorMessage");

const styles = require("./styles.css");
const { updateForm } = require("../../lib/redux-form");

const Register = React.createClass({
  propTypes: {
    username: string.isRequired,
    email: string.isRequired,
    password: string.isRequired,
    password_confirm: string.isRequired,
    update: func.isRequired,
    register: func.isRequired,
    registerRequest: request
  },
  render: function() {
    let { username, email, password, password_confirm, update, register, registerRequest } = this.props;
    return(
      <Grid className="mainGrid" fluid>
        <Row className={styles.registerContainer}>
          <Col md={4} sm={8} xs={10} mdOffset={4} smOffset={2} xsOffset={1}>
            <h3 className="text-center">Account Creation</h3>
            <ErrorMessage request={registerRequest}/>
            <Form onSubmit={register}>
              <FormGroup>
                <FormControl
                  type="text"
                  name="username"
                  placeholder="username"
                  value={username}
                  onChange={update}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="email"
                  name="email"
                  placeholder="email address"
                  value={email}
                  onChange={update}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={update}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="password"
                  name="password_confirm"
                  placeholder="confirm password"
                  value={password_confirm}
                  onChange={update}
                />
              </FormGroup>
              <RequestButton bsStyle="primary" type="submit" request={registerRequest}>
                Register
              </RequestButton>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
});

const mapStateToProps = function(state) {
  return {
    username: state.register.username,
    email: state.register.email,
    password: state.register.password,
    password_confirm: state.register.password_confirm,
    registerRequest: state.registerRequest
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    update: function(e) {
      dispatch(updateForm("register", e.target.name, e.target.value));
    },
    register: function(e) {
      e.preventDefault();
    }
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
