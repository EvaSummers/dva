import React,{ useState , useEffect} from 'react';
import { connect } from 'dva';
import { Content } from '@/components/Layout.jsx';
// const { indexOf,cloneDeep } = require('lodash');
// import request from '@/utils/request';
import { cloneDeep } from '@/utils/common'

 function index(props) {
    let [count,setCount]=useState(0);
    function handlerAdd(){
       return setCount(count+1);
    };

    function handlerChange(){
        props.dispatch({
            type:'global/setName',
            payload:"更改后的dva"
        });
    };

    // 生命周期
    useEffect(()=>{
        // request({url:"http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=13689046285"}).then(res=>{
        //     console.log(res);
        // })
        // console.log(indexOf([1,2,2,3,4],4));
        console.log("useEffect");
        var arr={"name":"Ya"};
        var arr2=cloneDeep(arr);
        console.log(arr,arr2);
        // let a=[0,1,2,3,4],
        // b=cloneDeep(a);
        // a[0]=1;
        // console.log(a,b);
        // console.log(props);
    },[])
    return (
        <Content>
            首页{count}  --- {props.global.name}
            <button onClick={()=>handlerAdd()}>
                +1
            </button>
            <button onClick={()=>handlerChange()}>
                改更Globel
            </button>
        </Content>
    )
}

export default connect(({global,other})=>({global,other}))(index);