import React from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,} from 'antd';

class CreateTransactionForm extends React.Component {
state = {
    confirmDirty: false,
    autoCompleteResult: [],
};

handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
        console.log('Received values of form: ', values);
    }
    });
};

handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
};

validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
    }
    callback();
};

render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4},
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
    };
    const tailFormItemLayout = {
    wrapperCol: {
        xs: {
        span: 24,
        offset: 0,
        },
        sm: {
        span: 16,
        offset: 4,
        },
    },
    };

    return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
            label={
                <span>
                Account Number to Transfer&nbsp;
                <Tooltip title="Receipient's Account Number">
                    <Icon type="user" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('acc_num', {
                rules: [{ required: true, message: 'Please input account number to make transaction', whitespace: true }],
            })(<Input />)}
            </Form.Item>

            <Form.Item
            label={
                <span>
                Amount to Transfer&nbsp;
                <Tooltip title="Amount to Transfer">
                    <Icon type="dollar" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('amount', {
                rules: [{ required: true, message: 'Please input amount', whitespace: true }],
            })(<Input />)}
            </Form.Item>

            <Form.Item
            label={
                <span>
                Carbon Credits to Transfer&nbsp;
                <Tooltip title="Carbon Credits to Transfer">
                    <Icon type="dollar" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('carbon', {
                rules: [{ required: true, message: 'Please input carbon credits', whitespace: true }],
            })(<Input />)}
            </Form.Item>

            <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
                rules: [
                {
                    required: true,
                    message: 'Please input your password!',
                },
                {
                    validator: this.validateToNextPassword,
                },
                ],
            })(<Input.Password />)}
            </Form.Item>

            <Form.Item label="Captcha" extra="We must make sure that your are a human.">
            <Row gutter={8}>
                <Col span={12}>
                {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(<Input />)}
                </Col>
                <Col span={12}>
                <Button>Get captcha</Button>
                </Col>
            </Row>
            </Form.Item>
            
            <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
                valuePropName: 'checked',
            })(
                <Checkbox>
                I have read the <a href="">agreement</a>
                </Checkbox>,
            )}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
}

const TransactionForm = Form.create({ name: 'register' })(CreateTransactionForm);

export default TransactionForm;