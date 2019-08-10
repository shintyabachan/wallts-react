import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Button, Icon, Row, Col,  } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      name: 'Husni Ramdani',
      count: 0,
      price: 10000,
      total: 0,
    };
  }

  tambah = () => {
    let count = this.state.count + 1;
    let total = this.state.price * count;
    let name = 'Husni Ramdani';
    if(count===10){
      count = 0;
      name = 'kambing';
    }
    this.setState({ 
      count,
      name,
      total,
     });
  };

  kurang = () => {
    this.setState({ count: this.state.count-1 });
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
          <div style={{ background: '#fff', padding: 24, minHeight: "100%" }}>
            <h1>Sekarang Jam</h1>
            <h1>
              {this.state.date.toLocaleTimeString()}
              <br/>
              {this.state.name}
            </h1>

            <Row>
              <Col span={3}>
                <Button.Group>
                  <Button onClick={this.kurang}>
                    <Icon type="minus" />
                  </Button>
                  <Button onClick={this.tambah}>
                    <Icon type="plus" />
                  </Button>
                </Button.Group>
              </Col>
              <Col span={2}>
                <h1>{this.state.count}</h1>
                <h1>{this.state.total}</h1>
              </Col>
            </Row>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>HEHEHE 2019</Footer>
        
      </Layout>
    );
  }
}

export default App;
