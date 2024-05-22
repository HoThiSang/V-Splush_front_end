import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button } from "antd";

function Buttons() {
  const [position, setPosition] = (useState < "start") | ("end" > "end");
  return (
    <>
      <Button icon={<PlusOutlined />} iconPosition={position}></Button>
      <Button icon={<PlusOutlined />} iconPosition={position}></Button>
    </>
  );
}

export default Buttons;
