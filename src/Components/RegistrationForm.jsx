import React from "react";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

var data = {
  userName: "",
  panCardNumber: "",
  accountNumber: "",
  electricityID: "",
  phone: "",
  gasPipelineID: "",
  email: ""
};

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        submitForm(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  handleSelectChange(e) {
    if (e.target.id === "register_userName") {
      data.userName = e.target.value;
    }
    if (e.target.id === "register_panCardNumber") {
      data.panCardNumber = e.target.value;
    }
    if (e.target.id === "register_accountNumber") {
      data.accountNumber = e.target.value;
    }
    if (e.target.id === "register_electricityID") {
      data.electricityID = e.target.value;
    }
    if (e.target.id === "register_gasPipelineID") {
      data.gasPipelineID = e.target.value;
    }
    if (e.target.id === "register_email") {
      data.email = e.target.value;
    }
    if (e.target.id === "register_phone") {
      data.phone = e.target.value;
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 4
        }
      }
    };
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "91"
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        {/* <Form.Item
          label={
            <span>
              Account Number&nbsp;
              <Tooltip title="Please Enter Account Number">
                <Icon type="user" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("accountNumber", {
            rules: [
              {
                required: true,
                message: "Please Enter Account Number",
                whitespace: true
              }
            ],
            onChange: this.handleSelectChange
          })(<Input />)}
        </Form.Item> */}

        <Form.Item
          label={
            <span>
              User Name&nbsp;
              <Tooltip title="Please Enter User Name">
                <Icon type="user" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("userName", {
            rules: [
              {
                required: true,
                message: "Please Enter User Name",
                whitespace: true
              }
            ],
            onChange: this.handleSelectChange
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Electricity ID&nbsp;
              <Tooltip title="Please Enter Electricity ID">
                <Icon type="thunderbolt" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("electricityID", {
            rules: [
              {
                required: true,
                message: "Please Enter Electricity ID",
                whitespace: true
              }
            ],
            onChange: this.handleSelectChange
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Contact Number&nbsp;
              <Tooltip title="Please Enter Contact Number">
                <Icon type="tablet" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("phone", {
            rules: [
              { required: true, message: "Please input your contact number!" }
            ],
            onChange: this.handleSelectChange
          })(<Input addonBefore={prefixSelector} style={{ width: "100%" }} />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Pan Card Number&nbsp;
              <Tooltip title="Please Enter Pan Card Number">
                <Icon type="idcard" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("panCardNumber", {
            rules: [
              {
                required: true,
                message: "Please Enter Pan Card Number",
                whitespace: true
              }
            ],
            onChange: this.handleSelectChange
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Gas Pipeline ID&nbsp;
              <Tooltip title="Please Enter Gas Pipeline ID">
                <Icon type="fire" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("gasPipelineID", {
            rules: [
              {
                required: true,
                message: "Please Enter Gas Pipeline ID",
                whitespace: true
              }
            ],
            onChange: this.handleSelectChange
          })(<Input />)}
        </Form.Item>

        <Form.Item
          label={
            <span>
              Email&nbsp;
              <Tooltip title="Please Enter Email ID">
                <Icon type="mail" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ],
            onChange: this.handleSelectChange
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

function submitForm(values) {
  fetch(
    "https://transaction-core.azurewebsites.net/api/mongo/user/createUser/",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userName: values.userName,
        electricityID: values.electricityID,
        mobileNumber: values.phone,
        panCardNumber: values.panCardNumber,
        gasPipeLineId: values.gasPipelineID,
        emailId: values.email
      })
    }
  );
}
export default WrappedRegistrationForm;
