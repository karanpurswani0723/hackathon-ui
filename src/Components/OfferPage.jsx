import React from 'react';
import { Card, Row, Col, Button, Layout } from 'antd';

class OfferPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
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
                                    <Button type="primary" htmlType="submit">
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