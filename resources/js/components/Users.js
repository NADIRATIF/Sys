import {Select} from 'antd';

function Users() {
  return (
    <div>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        allowClear
      >
        <Option value="lucy">Lucy</Option>
      </Select>
    </div>
  );
}

export default Users;
