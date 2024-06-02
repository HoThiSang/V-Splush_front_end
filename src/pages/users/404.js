import React from "react";
import { Alert } from "antd";
function Error() {
  return (
    <div className="error-container">
      <Alert
      className="custom-alert"
        description={<p>404 Error Page</p>}
        type="info"
      />
      <img
        src="/404.jpg"
        alt="Error"
        className="responsive-image"
      />
    </div>
  );
}
export default Error;
