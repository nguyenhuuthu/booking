import React from "react";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

function DateTime(props) {
  let { handleDateChange } = props;
  return (
    <Space direction="vertical" size={12}>
      <RangePicker onChange={handleDateChange} />
    </Space>
  );
}

export default DateTime;
