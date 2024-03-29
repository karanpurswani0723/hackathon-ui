import React from "react";
import { Layout } from "antd";

import CustomHeader from "./CustomHeader";
import CustomContent from "./CustomContent";
import CustomFooter from "./CustomFooter";

class HomePage extends React.Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
    },
  };

  componentWillMount() {
    const userForm = this;
    let { user } = this.state;
    fetch("/.auth/me")
      .then(res => res.json())
      .then(
        result => {
          result[0].user_claims.forEach(function(claimItem) {
            if (claimItem.typ.endsWith("emailaddress")) {
              user.email = claimItem.val;
            }
            if (claimItem.typ.endsWith("givenname")) {
              user.firstName = claimItem.val;
            }
            if (claimItem.typ.endsWith("surname")) {
              user.lastName = claimItem.val;
            }
            userForm.setState({ user });
          });
        },
        error => {
          alert("error2 " + error);
        }
      );
  }

  render() {
    return (
      <Layout>
        <CustomHeader
          loginStatus={this.state.loginStatus}
          user={this.state.user}
        />
        <CustomContent
          loginStatus={this.state.loginStatus}
          user={this.state.user}
        />
        <CustomFooter />
      </Layout>
    );
  }
}

export default HomePage;
