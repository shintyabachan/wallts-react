import React, { Component } from 'react';
import { Button, Row, Col, Card, List } from 'antd';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Kambing :)',
            count: 0,
            total: 0,
            items: [],
        };
    }

    handlePressEnter = e => {
        const item = {
          content: e.target.value,
        };
    
        const newItems = this.state.items.concat(item);
    
        this.setState({
          items: newItems
        });
      };

    render() { 
        console.log(this.state.items);
        return ( 
            <div style={{ background: '#ECECEC', padding: 24, minHeight: "100%" }}>
            <h1>
              Haloo {this.state.name}
            </h1>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Baju" bordered={false}>
                  <Button
                    value="Baju"
                    type="primary"
                    icon="plus"
                    onClick={this.handlePressEnter}
                  >
                    Tambah
                  </Button>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Celana" bordered={false}>
                    <Button 
                        value="Celana"
                        price={10000}
                        type="primary"
                        icon="plus"
                        onClick={this.handlePressEnter}
                    >
                      Tambah
                    </Button>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  <Button type="primary" icon="plus">
                      Tambah
                    </Button>
                </Card>
              </Col>
            </Row>
            <br />
            <Row style={{ backgroundColor: "white" }}>
              <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.state.items}
                renderItem={item => 
                    <List.Item>{item.content}</List.Item>
                }
              />
            </Row>
          </div>
        );
    }
}
 
export default Home;