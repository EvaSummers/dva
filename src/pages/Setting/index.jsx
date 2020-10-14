import { connect } from 'dva';

function Index(props){
  return (
    <div>个人设置</div>
  )
}
export default connect(({global,other})=>({global,other}))(Index);
