import React, {useEffect} from 'react';
import {Select} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/Users/actions';


function Dashboard() {
  const {Option} = Select;
  const dispatch = useDispatch();
  const data = useSelector(state => state.usersReducer)
  console.log(data)
  useEffect(()=>{
    dispatch({
      type: actions.GET_ALL_USER,
    })
  }, [])
  return (
    <div className="dashboard">
      <div>{data.map((item) => <p>{item.name}</p>)}</div>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        allowClear
        children={Select.Option}>
        {/*{data.map((item, i) => <Option key={i} value={item.id}>{item.name}</Option>)}*/}
      </Select>
    </div>
  );
}

export default Dashboard;
