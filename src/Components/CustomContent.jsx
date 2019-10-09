import React from 'react';
import { Tabs, Icon, Layout } from 'antd';
import DisplayPage from './DisplayPage';
import WalletContents from './WalletContents';
import TransactionContents from './TransactionContents';
import TransactionForm from './CreateTransaction';

const { Content } = Layout;

class CustomContent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginStatus: this.props.loginStatus
        }
    }
    
    render(){
        return(
            <Content style={{ height: "calc(90vh - 55px)" }}>
                {console.log(this.state.loginStatus)}
                {(()=>{
                    if(this.state.loginStatus)
                        return(
                            <Tabs defaultActiveKey="1" style={{ padding: '16px' }}>
                                <Tabs.TabPane tab={<span><Icon type="wallet" />Wallet Details</span>} key="1">
                                    <WalletContents />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<span><Icon type="calendar" />Transaction History</span>} key="2">
                                    <TransactionContents />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<span><Icon type="credit-card" />Make Transaction</span>} key="3">
                                    <TransactionForm />
                                </Tabs.TabPane>
                            </Tabs>
                        );
                    else
                        return(
                            <DisplayPage />
                        );
                })()}
            </Content>
        );
    }
}

export default CustomContent;