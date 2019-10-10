import React from "react";
import { Tabs, Icon, Layout } from "antd";

import DisplayPage from "./DisplayPage";
import WrappedNormalLoginForm from "./NormalLoginForm";
import WrappedRegistrationForm from "./RegistrationForm";
import HomePage from "./HomePage";
import UserForm from "./UserForm";

const { Header } = Layout;

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: this.props.loginStatus,
      user: this.props.user,
      accountNumber: 1570650001142
    };
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut() {
    console.log("sign out done");
    this.setState({ loginStatus: false });
    this.render(<HomePage loginStatus={this.state.loginStatus} />);
  }

  render() {
    return (
      <Header className="Header">
          <Tabs defaultActiveKey="1" style={{ padding: "16px" }}>
                <Tabs.TabPane
                  tab={<span style={{ color: "white" }}>CO2 Wallet</span>}
                  key="1"
                />
                <Tabs.TabPane
                  tab={
                    <span style={{ color: "white" }}>
                      <Icon type="user" />
                      Logged In as {this.props.user.email}
                    </span>
                  }
                  key="2"
                />
            </Tabs>
        </Header>
    );
  }
}

export default CustomHeader;
