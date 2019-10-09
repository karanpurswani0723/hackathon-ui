import React from 'react';
import { Layout } from "antd";

import CustomHeader from './CustomHeader';
import CustomContent from './CustomContent';
import CustomFooter from './CustomFooter'; 

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginStatus: false
        }
    }

    render(){
        return(
            <Layout>
                {/* {this.setState({loginStatus: true})} */}
                <CustomHeader loginStatus={this.state.loginStatus}/>
                <CustomContent loginStatus={this.state.loginStatus}/>
                <CustomFooter />
            </Layout>
        );
    }
}

export default HomePage;