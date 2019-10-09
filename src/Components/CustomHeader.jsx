import React from 'react';
import { Tabs, Icon, Layout } from 'antd';

import DisplayPage from './DisplayPage';
import WrappedNormalLoginForm from './NormalLoginForm';
import WrappedRegistrationForm from './RegistrationForm';
import HomePage from './HomePage';
import UserForm from './UserForm';

const { Header } = Layout;

class CustomHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginStatus: this.props.loginStatus
        }
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut(){
        console.log("sign out done");
        this.setState({loginStatus: false});
        this.render(<HomePage loginStatus={this.state.loginStatus}/>);
    }

    render(){
        return(
            <Header className="Header">
                
                    {(()=>{
                        if(this.state.loginStatus)
                            return(
                                <Tabs defaultActiveKey="1" style={{ padding: '16px' }}>
                                    <Tabs.TabPane  tab={<span style={{ color : 'white' }}>CO2 Wallet</span>} key="1" />                
                                    <Tabs.TabPane  tab={<span style={{ color : 'white' }}><Icon type="logout" />Sign Out</span>} key="2" onTabClick={this.handleSignOut}/>
                                </Tabs>
                            );
                        else
                            return(
                                <Tabs defaultActiveKey="1" style={{ padding: '16px' }}>
                                    <Tabs.TabPane  tab={<span style={{ color : 'white' }}>CO2 Wallet</span>} key="1">
                                        <DisplayPage />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane  tab={<span style={{ color : 'white' }}><Icon type="login" />Sign In</span>} key="2">
                                        {/* <WrappedNormalLoginForm /> */}
                                        <UserForm />
                                    </Tabs.TabPane>
                                    <Tabs.TabPane tab={<span style={{ color : 'white' }}><Icon type="plus-circle-o" />Create Account</span>} key="3">
                                        <WrappedRegistrationForm />
                                    </Tabs.TabPane>
                                </Tabs>
                            );
                    })()}
            </Header>
        );
    }
}

export default CustomHeader;