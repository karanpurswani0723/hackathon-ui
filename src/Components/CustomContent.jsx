import React from 'react';
import { Tabs, Icon, Layout } from 'antd';
import DisplayPage from './DisplayPage';
import WalletDetails from './WalletDetails';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './CreateTransaction';
import OfferPage from './OfferPage';

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
                                    <WalletDetails />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<span><Icon type="calendar" />Transaction History</span>} key="2">
                                    <TransactionHistory />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<span><Icon type="credit-card" />Make Transaction</span>} key="3">
                                    <TransactionForm />
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<span><Icon type="tags" />Offers</span>} key="4">
                                    <OfferPage />
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