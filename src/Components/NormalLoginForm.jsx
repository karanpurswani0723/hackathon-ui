import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import HomePage from './HomePage';
import RaisedButton from "material-ui/RaisedButton";

const formStyle ={
  width : 300,  
}

class NormalLoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loginStatus: this.props.loginStatus
    }
  }

  state = {};

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      var username = "hardik";
      var password = "1234";
      if(values.username==username&&values.password==password){
        this.setState({loginStatus: true});
        console.log("Correct Credentials");
      }
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { values, handleChange } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <center>
        <Form onSubmit={this.handleSubmit} className="login-form" style={formStyle}>
          <Form.Item>
            {getFieldDecorator('firstname', {
              rules: [{ required: true, message: 'Please input your firstname!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="FirstName"
                onChange={handleChange("firstName")}
                value={values.firstName}
                disabled={values.firstName === "" ? false : true}
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('lastname', {
              rules: [{ required: true, message: 'Please input your lastname!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="LastName"
                onChange={handleChange("lastName")}
                value={values.lastName}
                disabled={values.lastName === "" ? false : true}
              />,
            )}
          </Form.Item>

          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
                rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ],
            })(<Input 
              onChange={handleChange("email")}
              value={values.email}
              disabled={values.lastName === "" ? false : true}
              />)}
          </Form.Item>

          {/* <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={formStyle}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item> */}

          <RaisedButton
            label="Continue"
            primary={true}
            style={StyleSheet.button}
            onClick={this.continue}
          />
        </Form>
      </center>
    );
  }
}

const styles = {
  button: {
    margin: 2
  }
};
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;