import { Layout, Menu } from 'antd';
import { UnorderedListOutlined, HomeOutlined, FileAddOutlined } from '@ant-design/icons';
import './App.css';
import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import WildHabEventForm from './CreateEventForm/WildHabEventForm';
import ListEvents from './ListEvents';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
      <Router>
    <Layout style={{minHeight: "100vh"}}>
        <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <br/>
      <br/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileAddOutlined />}>
        <Link to="/create-event">Create Event</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UnorderedListOutlined />}>
        <Link to="/list-events">List Events</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    {/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/create-event">
              <WildHabEventForm />
            </Route>
            <Route path="/list-events">
              <ListEvents />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2018 Created by Rebecca Bakels</Footer>
    </Layout>
      </Layout>
      </Router>
  );
}

function Home() {
  return <h1>Welcome to Wild Habitat!</h1>;
}

export default App;
