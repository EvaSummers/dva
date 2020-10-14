import React,{useEffect} from 'react';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb, Row, Col,} from 'antd';
import { UserOutlined ,MailOutlined} from '@ant-design/icons';
import styles from './styles/styles.scss'

import { Switch } from 'dva/router';
import SubRouter, {NoMatchRoute ,RedirectRoute} from '@/utils/subRoutes'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function index(props) {
  const {routes,app,global,history}=props;
  const {breadcrumb} = global;
  console.log("Home===>>",routes);

  function changeSide(a){
    console.log("changeSide===>>",a, a.key);
    history.push(a.key);
  }
  // 生命周期
    useEffect(()=>{},[])
    return (
      <Layout className={styles.home}>
        <Header className={styles.header}>
          <Row justify="end">
            <Col span={4}>ddd<div className= {styles.logo} /></Col>
            <Col className={styles.loginPart} span={4} offset={16}>hello Eva</Col>
          </Row>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background">
            {/* 侧边栏 */}
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                onClick={changeSide}
                style={{ height: '100%' }}
              >
                {
                  routes.map(item=>{
                    if(item.routes){
                      return (
                        <SubMenu key={item.path} icon={<UserOutlined />} title={item.meta.title}>
                          {
                            item.routes.map(subItem=>{
                              return(<Menu.Item key={subItem.path}>{subItem.meta.title}</Menu.Item>)
                            })
                          }
                        </SubMenu>
                      )
                    }else{
                      return (
                        <Menu.Item key={item.path} icon={<MailOutlined />}>
                          {item.meta.title}
                        </Menu.Item>
                      )
                    }
                  })
                }
              </Menu>
            </Sider>
            {/* 内容 */}
            <Content style={{ padding: '0 24px', minHeight: 680 }}>
              {/* 面包屑 */}
              <Breadcrumb style={{ margin: '16px 0' }}>
                {
                  breadcrumb.map(item=>{
                    return(
                      <Breadcrumb.Item>item</Breadcrumb.Item>
                    )
                  })
                }
              </Breadcrumb>
              {/* 主体内容页面 */}
              <div className="Content">
              <Switch>
                {
                  routes.map((route, i) => (
                    <SubRouter key={i} {...route} app={app} />
                  ))
                }
                {/* 重定向 */}
                <RedirectRoute exact={true} from={'/'} routes={routes} />
                {/* 输入的链接不存在时,跳转到NoMatch组件中 */}
                <NoMatchRoute />
              </Switch>
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default connect(({global,other})=>({global,other}))(index);