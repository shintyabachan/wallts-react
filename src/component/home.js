import React, { Component } from 'react';
import { Button, Row, Col, Card, List } from 'antd';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Husni Ramdani',
            count: 0,
            total: 0,
            items: [],
        };
    }

    handlePressEnter = e => {
        // Create a todo object containing its index and content
        console.log(e.target);
        const item = {
          content: e.target.value
        };
    
        // Add the todo to our array
        const newItems = this.state.items.concat(item);
    
        this.setState({
          items: newItems
        });
        console.log(this.state.items);
      };

    render() { 
        return ( 
            <div style={{ background: '#ECECEC', padding: 24, minHeight: "100%" }}>
            <h1>
              Haloo {this.state.name}
            </h1>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  <Button
                    value="tambah"
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
                renderItem={item => <List.Item>{item.content}</List.Item>}
              />
            </Row>
          </div>
        );
    }
}
 
export default Home;