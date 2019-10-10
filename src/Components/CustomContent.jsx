import React from "react";
import { Tabs, Icon, Layout } from "antd";
import DisplayPage from "./DisplayPage";
import WalletDetails from "./WalletDetails";
import TransactionHistory from "./TransactionHistory";
import TransactionForm from "./CreateTransaction";
import OfferPage from "./OfferPage";
import WrappedRegistrationForm from './RegistrationForm';

const { Content } = Layout;

class CustomContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: props.user,
        registeredFlag: false
    };
   
  }

  componentDidMount() {
    const userForm = this;
    let { user } = this.state;
    const emailId = this.state.user.email
    fetch("https://transaction-core.azurewebsites.net/api/mongo/user/getUserByEmailId/akhilgupta01@gmail.com")
      .then(res => res.json())
      .then(
        function(result) {
          if(result!=null){
              console.log(result)
          }
        },
        error => {
            user.registeredFlag = false
            alert("error2 " + error);
        }
      ); 
  }

  render() {
    return (
      <Content style={{ height: "calc(90vh - 55px)" }}>
       
        {(() => {
          if (this.state.registeredFlag)
            return (
              <Tabs defaultActiveKey="1" style={{ padding: "16px" }}>
                <Tabs.TabPane
                  tab={
                    <span>
                      <Icon type="wallet" />
                      Wallet Details
                    </span>
                  }
                  key="1"
                >
                  <WalletDetails />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <span>
                      <Icon type="calendar" />
                      Transaction History
                    </span>
                  }
                  key="2"
                >
                  <TransactionHistory user = {this.state.user.email} />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <span>
                      <Icon type="credit-card" />
                      Make Transaction
                    </span>
                  }
                  key="3"
                >
                  <TransactionForm />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab={
                    <span>
                      <Icon type="tags" />
                      Offers
                    </span>
                  }
                  key="4"
                >
                  <OfferPage />
                </Tabs.TabPane>
              </Tabs>
            );
          else return (
            <Tabs defaultActiveKey="1" style={{ padding: "16px" }}>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="login" />
                    Complete Registration
                  </span>
                }
                key="1"
              >
                <WrappedRegistrationForm />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="wallet" />
                    Wallet Details
                  </span>
                }
                key="2"
              >
                <WalletDetails />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="calendar" />
                    Transaction History
                  </span>
                }
                key="3"
              >
                <TransactionHistory />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="credit-card" />
                    Make Transaction
                  </span>
                }
                key="4"
              >
                <TransactionForm />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <Icon type="tags" />
                    Offers
                  </span>
                }
                key="5"
              >
                <OfferPage />
              </Tabs.TabPane>
            </Tabs>
          );
        })()}
      </Content>
    );
  }
}

export default CustomContent;