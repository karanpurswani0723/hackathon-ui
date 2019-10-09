import React from 'react';
import { Layout, Card, Icon, Form,Tooltip } from 'antd';

class WalletDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount() {
      fetch("/WalletDetails.json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                {this.state.items.map(item=>(
                    <center>
                        <Card style={{width: 800}}>
                            {/* <Layout>
                            <Form.Item
                                label={
                                    <span>
                                    <Tooltip title="Receipient's Account Number">
                                        <Icon type="user" />
                                    </Tooltip>
                                    Account Number : {item.accountNumber}
                                    </span>
                                }
                            />
                            </Layout> */}
                            <Layout style={{marginTop: 8}}>
                                <span>
                                    {/* <Icon type="wallet" /> */}
                                    <h3>Account Number : {item.accountNumber}</h3>
                                </span>
                            </Layout>

                            <Layout style={{marginTop: 8}}>
                                {/* <Icon type="wallet" /> */}
                                <h3>User Name : {item.userName}</h3>
                            </Layout>

                            <Layout style={{marginTop: 8}}>
                                {/* <Icon type="wallet" /> */}
                                <h3>Electricity ID : {item.electricityID}</h3>
                            </Layout>

                            <Layout style={{marginTop: 8}}>
                                {/* <Icon type="wallet" /> */}
                                <h3>Mobile Number : {item.mobileNumber}</h3>
                            </Layout>

                            <Layout style={{marginTop: 8}}>
                                {/* <Icon type="wallet" /> */}
                                <h3>Pan Card Number : {item.panCardNumber}</h3>
                            </Layout>
                            
                            <Layout style={{marginTop: 8}}>
                                {/* <Icon type="wallet" /> */}
                                <h3>Gas Pipeline ID : {item.gasPipelineID}</h3>
                            </Layout>

                            <Layout style={{marginTop: 8}}>
                                {/* <Icon type="wallet" /> */}
                                <h3>Email ID : {item.emailID}</h3>
                            </Layout>
                        </Card>
                    </center>
                ))}
          </div>
        );
      }
    }
  }

export default WalletDetails; 