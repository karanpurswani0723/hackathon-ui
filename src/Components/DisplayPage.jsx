import React from 'react';
import { Tabs, Icon, Layout } from 'antd';

const { Content } = Layout;

class DisplayPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Content>
                <h3>This is Display Page</h3>
            </Content>
        );
    }
}

export default DisplayPage;