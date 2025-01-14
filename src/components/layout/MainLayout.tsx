import React from 'react';
import { Layout, Menu, MenuProps } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
    {
        key: '1',
        label: 'Dashboard',
    },
    {
        key: '2',
        label: 'Profile',
    },
    {
        key: '3',
        label: 'User Management',
        children: [
            {
                key: '3-1',
                label: 'Create User',
            },
            {
                key: '3-2',
                label: 'User List',
            }
        ]
    },
    {
        key: '4',
        label: 'Profile',
    },
]

const MainLayout: React.FC = () => {

    return (
        <Layout>
            <Sider
                style={{
                    minHeight: '100vh',
                }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{
                    color: "white",
                    height: "4rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <h1>University Mgmt</h1>
                </div>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,

                        }}
                    >
                        The main content should be there
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;