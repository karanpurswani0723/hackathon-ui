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
                Account Number&nbsp;
                <Tooltip title="Account Number">
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
                Description&nbsp;
                <Tooltip title="description">
                    <Icon type="form" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('description', {
                rules: [{ required: true, message: 'Please input description', whitespace: true }],
            })(<Input />)}
            </Form.Item>

            <Form.Item
            label={
                <span>
                Category&nbsp;
                <Tooltip title="Category">
                    <Icon type="tags" />
                </Tooltip>
                </span>
            }
            >
            {getFieldDecorator('category', {
                rules: [{ required: true, message: 'Please input Category', whitespace: true }],
            })(<Input />)}
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