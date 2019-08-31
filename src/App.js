import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button, Icon, Row, Col, Card, List } from 'antd';

class App extends Component {
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

  render(){
    const { Header, Content, Footer } = Layout;

    return (
      <Layout className="layout" style={{ minHeight: "100vh"}}>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">HOME</Menu.Item>
            <Menu.Item key="2">STORE</Menu.Item>
            <Menu.Item key="3">APPS</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
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

        </Content>
        <Footer style={{ textAlign: 'center' }}>HEHEHE 2019</Footer>
        
      </Layout>
    );
  }
}

export default App;
