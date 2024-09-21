import { useState } from 'react';
import './App.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InsertRowBelowOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Outlet, useLocation , Link} from 'react-router-dom';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
};
const a = 'c'
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div id="app">
      <Layout style={{ height: '100%' }}>
        <Sider style={siderStyle} trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[]}
            items={[
              {
                key: 'market',
                icon: <InsertRowBelowOutlined />,
                label: <Link to="/market">插件市场 </Link>,
              },
              {
                key: 'user',
                icon: <UserOutlined />,
                label:<Link to="/user">个人中心 </Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
