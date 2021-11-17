import React, { useState } from "react";
import {
  Layout,
  Menu,
  Input,
  Card,
  Col,
  Row,
  Result,
  Progress,
  Modal,
  Select,
  Button,
  Dropdown,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  UserOutlined,
  BarChartOutlined,
  MoneyCollectOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  LogoutOutlined,
  //   NotificationOutlined,
} from "@ant-design/icons";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import "../styles/dashboard.css";

import Analytics from "./analytics";
import Billings from "./billings";
import Settings from "./settings";
import Help from "./help";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { TextArea } = Input;
const { Option } = Select;

export default function Dashboard() {
  const [state, setState] = useState({
    collapsed: false,
  });

  const toggle = () => {
    setState({
      collapsed: !state.collapsed,
    });
  };

  const todos = [
    {
      text: "Write and article on UX research for department blog",
      time: "9:30 am",
      Date: "Today",
      status: "In progress",
      category: "school",
    },
    {
      text: "Check your emails",
      time: "2:00 pm",
      Date: "Wednesday",
      status: "Not started",
      category: "business",
    },
    {
      text: "Write and article on UX research for department blog",
      time: "9:30 am",
      Date: "Wednesday",
      status: "Completed",
      category: "school",
    },
    {
      text: "Go to the saloon",
      time: "3:30 pm",
      Date: "Thursday",
      status: "Completed",
      category: "personal",
    },
    {
      text: "Pick up delivery",
      time: "8:30 pm",
      Date: "Today",
      status: "In progress",
      category: "personal",
    },
  ];

  function NoMatch() {
    // let location = useLocation();

    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited is not available yet."
          // extra={<Button type='primary'>Back Home</Button>}
        />
      </div>
    );
  }
  const sideWidth = 200;
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const onSearch = (value) => console.log(value);

  let match = useRouteMatch();

  const logout = () => {
    // history.push("/login");
    localStorage.clear();
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <span
          onClick={() => logout()}
          style={{
            color: "red",
            cursor: "pointer",
          }}
        >
          <span className="">logout</span> <LogoutOutlined />
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={open}
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        //   // setsideWidth(window.innerWidth * 0.95);
        // }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          zIndex: 100001,
        }}
      >
        <div
          className="logo"
          style={{ height: 30, backgroundColor: "#fff", margin: 15 }}
        />
        <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
          <Menu.Item key={"0"} icon={<SettingOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key={"1"} icon={<SettingOutlined />}>
            <Link to="/dashboard/analytics">Analytics</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            <Link to="/dashboard/billings">Billings</Link>
          </Menu.Item>
          <Menu.Item key={"3"} icon={<SettingOutlined />}>
            <Link to="/dashboard/help">Help</Link>
          </Menu.Item>
          <Menu.Item key={"4"} icon={<SettingOutlined />}>
            <Link to="/dashboard/settings">Settings</Link>
          </Menu.Item>
        </Menu>

        <span
          onClick={() => logout()}
          style={{
            color: "red",
            cursor: "pointer",

            position: "absolute",
            bottom: 20,
            left: 20,
          }}
        >
          <span className="mob">logout</span> <SettingOutlined />
        </span>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: !open ? sideWidth : 0 }}
      >
        <Header
          className="site-layout-background"
          style={{ padding: 0, backgroundColor: "#fff", width: "100%" }}
        >
          <div className="heading-wrap shadowed">
            <Dropdown overlay={menu} placement="topLeft">
              <div
                className="ant-dropdown-link user-name"
                onClick={(e) => e.preventDefault()}
              >
                <UserOutlined style={{ marginRight: 10 }} />
                Hello Pidoxy!
              </div>
            </Dropdown>
            <MenuOutlined onClick={() => setOpen(!open)} />
          </div>
        </Header>
        <Content
          style={{
            margin: "0",
            padding: "4rem 2rem",
            overflow: "auto",
            backgroundColor: "#eff2f5",
            height: "100vh",
          }}
        >
          <div>
            <Switch match>
              <Route exact path={`${match.path}`}>
                <div className="site-card-wrapper">
                  <Row gutter={16}>
                    <Col span={8}>
                      <Card
                        title="School"
                        extra={<img src="./images/school.svg" alt="school" />}
                      >
                        Card content
                        <p>40 tasks</p>
                        <p>2/40 in progress</p>
                        <Progress
                          strokeColor="#00B87C"
                          percent={(5 / 40) * 100}
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        title="Business"
                        extra={<img src="./images/business.svg" alt="school" />}
                      >
                        Card content
                        <p>40 tasks</p>
                        <p>5/40 in progress</p>
                        <Progress
                          strokeColor="#3451A1"
                          percent={(14 / 40) * 100}
                        />
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card
                        title="Personal"
                        extra={<img src="./images/personal.svg" alt="school" />}
                      >
                        Card content
                        <p>40 tasks</p>
                        <p>7/40 in progress</p>
                        <Progress
                          strokeColor="#EF5DA8"
                          percent={(30 / 40) * 100}
                        />
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={20} className="space-y-5 my-10">
                      {todos.map((todo, index) => (
                        <Card type="inner">
                          <Row>
                            <Col span={2}>
                              <img
                                style={
                                  { color: "#fff", display: "inline-block" }
                                  //   (todo.category === "personal" ? {color: "#3451A1"} : todo.category === "business" ? {color: "#F40101"} : todo.status === "school" ? {color: "#00B87C"} : {color: "#3451A1"})
                                }
                                src="./images/unchecked.svg"
                                alt="checked"
                              />
                            </Col>
                            <Col className="mr-5" span={8}>
                              <span>{todo.text}</span>
                            </Col>
                            <Col className="mx-10" span={4}>
                              <span>{todo.time}</span>
                            </Col>
                            <Col
                              style={
                                todo.status === "In progress"
                                  ? { color: "#3451A1" }
                                  : todo.status === "Not started"
                                  ? { color: "#F40101" }
                                  : todo.status === "Completed"
                                  ? { color: "#00B87C" }
                                  : { color: "#3451A1" }
                              }
                              className="mx-10"
                              span={4}
                            >
                              <span>{todo.status}</span>
                            </Col>
                            <Col className="mx-10" span={4}>
                              <span>{todo.date}</span>
                            </Col>
                          </Row>
                        </Card>
                      ))}
                    </Col>
                    <Col span={3} offset={1}>
                      <div onClick={() => setVisible(true)}>
                        <img src={visible ? "./images/add-todo-active.svg":"./images/add-todo.svg"} alt="add" />
                      </div>
                      <Modal
                        title="Create new task"
                        centered
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                        width={500}
                        okText="Add task"
                        footer={null}
                      >
                        <Select
                          showSearch
                          style={{ width: 200, margin: "1rem 0" }}
                          placeholder="Select category"
                          optionFilterProp="children"
                          //   onChange={onChange}
                          //   onFocus={onFocus}
                          //   onBlur={onBlur}
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="school">School</Option>
                          <Option value="business">Business</Option>
                          <Option value="personal">Personal</Option>
                        </Select>{" "}
                        <TextArea style={{ margin: "1rem 0" }} rows={4} />
                        <Button
                          className="bg_primary"
                          size={"large"}
                          type="primary"
                          block
                        >
                          Add task
                        </Button>{" "}
                      </Modal>
                      <div onClick={() => setVisible2(true)}>
                        <img src={visible2 ? "./images/speak-active.svg": "./images/speak.svg"} alt="add" />
                      </div>
                      <Modal
                        title="Create new task"
                        centered
                        visible={visible2}
                        onOk={() => setVisible2(false)}
                        onCancel={() => setVisible2(false)}
                        width={600}
                        footer={null}
                      >
                        <Row style={{ margin: "1rem 0" }}>
                          <Col span={6}>
                            <img src="./images/speak.svg" alt="add" />
                          </Col>
                          <Col span={18}>
                            <img style={{verticalAlign: 'middle', margin: 'auto'}} src="./images/audio.svg" alt="add" />
                          </Col>
                        </Row>
                        <Button
                        // style={{ margin: "1rem 0", marginLeft: 'auto !important' }}
                          className="btn_modal flex mx-auto"
                          size={"large"}
                          type="primary"
                        >
                          Add task
                        </Button>{" "}
                      </Modal>
                    </Col>
                  </Row>
                </div>
              </Route>
              <Route path={`${match.path}/settings`}>
                <Settings />
              </Route>
              <Route path={`${match.path}/analytics`}>
                <Analytics />
              </Route>
              <Route path={`${match.path}/help`}>
                <Help />
              </Route>
              <Route path={`${match.path}/billings`}>
                <Billings />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
