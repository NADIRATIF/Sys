import React from 'react';
import {Select,Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/Users/actions';



function Dashboard() {
  const {data} = useSelector(state => state.usersReducer)
  const dispatch = useDispatch();
  let onFinish = () => {
    dispatch({
      type: actions.GET_ALL_USER,
    });
  };
  return (
    <div className="dashboard">
      {/*<div>{users.map((item, i) => <p key={i}>{item.name}</p>)}</div>*/}
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        allowClear
      >
        <Option value="lucy">Lucy</Option>
      </Select>
      <Button type="primary" onClick={onFinish}>test</Button>
    </div>
  );
}

export default Dashboard;
