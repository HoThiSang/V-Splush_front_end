import React from "react";
import { Alert } from "antd";
function Error() {
  return (
    <>
      <Alert
        message="Page not found"
        description={<p>404 Error Page</p>}
        type="info"
      />
        <img
          src="/404.jpg"
          alt="Error" />
    </>
  );
}

export default Error;
