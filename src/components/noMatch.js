import React from 'react'
import { Result,Button } from 'antd';
import { withRouter } from 'react-router-dom'

function noMatch(props) {
    function handlerCallback(){
      props.history.goBack();
    }
    return (
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在。"
        extra={<Button type="primary" onClick={()=>handlerCallback()}>返回</Button>}
      />
    )
}
export default withRouter(noMatch);
