import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      name: 'Husni Ramdani',
    };
  }

  componentDidMount() {
    setInterval(
      () => this.setState({
          date: new Date(),
        }),
      1000
    );
  }

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
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>HEHEHE 2019</Footer>
        
      </Layout>
    );
  }
}

export default App;
