import React from 'react';
import { Tabs, Icon, Layout } from 'antd';

const { Footer } = Layout;

class CustomFooter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Footer>
                <h3><b>Developed By Ctrl+Alt+Enter</b></h3>
            </Footer>
        );
    }
}

export default CustomFooter;