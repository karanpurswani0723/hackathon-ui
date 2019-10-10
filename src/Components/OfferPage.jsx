import React from 'react';
import { Card, Row, Col, Button, Layout } from 'antd';

class OfferPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        accountNumber: 1570650001142
      };
      this.handleClaim=this.handleClaim.bind(this);
    }

    componentDidMount() {
      fetch("/Offers.json")
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

    handleClaim(event, offerId){
        fetch("https://offer-core.azurewebsites.net/offers/1570650001142", {
            method: 'POST',
            body: JSON.stringify({
            accountNumber: 1570650001142,
            offerId: offerId,
            offerStatus: 'claimed',
            }),
            headers: {
                'Content-Type': 'application/json'
            },
          
        })
        .then((response) => response)
        .then((responseText) => {
            if(responseText.status===400)
                alert("Successfully Claimed Offer");
            else
                alert("Insufficient Balance");
        })
        .catch((error) => {
            console.error(error);
        });
        event.target.style="background:green";
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <center>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                    {this.state.items.map(item=>(                        
                        <Col span={8} style={{marginTop: 16}}>
                            <Card title={item.offerName} bordered={true}>
                                <Layout>
                                    <p>Offer Description : {item.offerDescription}</p>
                                    <p>Offer Validity : {item.validity}</p>
                                    <p>Offer Value : {item.offerValue}</p>
                                    <p>Credit Rating : {item.creditRating}</p>
                                    <Button onClick={(event)=>{this.handleClaim(event, item.offerId)}} type="primary" htmlType="submit">
                                        Claim Offer
                                    </Button>
                                </Layout>
                            </Card>
                        </Col>
                    ))}
                    </Row>
                </div>
            </center>
        );
      }
    }
  }

export default OfferPage; 