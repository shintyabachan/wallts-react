import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './component/home';
import Store from './component/store';

class App extends Component {
  render(){
    const { Header, Content, Footer } = Layout;

    return (
      <BrowserRouter>
        <Layout className="layout" style={{ minHeight: "100vh"}}>
          <Header>
            <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"> <Link to='/'> HOME </Link> </Menu.Item>
                <Menu.Item key="2"> <Link to='/store'> STORE </Link> </Menu.Item>
                <Menu.Item key="3"> <Link to='/apps'> APPS </Link> </Menu.Item>
              </Menu>
          </Header>

          <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            
            <main>
              <Route path='/' exact component={Home} />
              <Route path='/store' exact component={Store} />
            </main>         

          </Content>
          <Footer style={{ textAlign: 'center' }}>HEHEHE 2019</Footer>
        
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
