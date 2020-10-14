import React, { useState } from 'react';
import { connect } from 'dva';
import { Content } from '@/components/Layout.jsx';
import {
  Form,
  Input,
  Divider,
  Button,
  Space,
  Modal
} from 'antd';
import {
  AlignRightOutlined
} from '@ant-design/icons';
import styles from './styles/styles.scss';

const { TextArea } = Input;
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Index(props){
  let [name,setName]=useState(0);

  function onFormLayoutChange (){
    console.log("onFormLayoutChange===>>>")
  }
  function onChange(){
    console.log("onChange===");
  }
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Content className={styles.layout}>
      <p>新建</p>
      <Divider />
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="手机号" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="姓名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="开单医生" name="doctorName">
          <Input />
        </Form.Item>
        <Form.Item label="随访计划编号" name="code">
          <Input suffix={<AlignRightOutlined />} />
        </Form.Item>
        <Form.Item label="备注" name="remark">
          <TextArea
            onChange={onChange}
            placeholder="请输入随访简介，不多于300个字。"
            autoSize={{ minRows: 3, maxRows: 5 }}
            maxLength={300}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              新建
            </Button>
            <Button type="button" htmlType="submit">
              取消
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Content>
  )
}
export default connect(({global,other})=>({global,other}))(Index);
