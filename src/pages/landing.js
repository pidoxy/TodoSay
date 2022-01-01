import { Button } from "antd";
import { withRouter } from "react-router-dom";

 const Landing = withRouter(({ history }) => {
  return (
    <div
      className="flex flex-col space-y-5 mx-auto"
      style={{ backgroundColor: "#3451A1", height: "100vh" }}
    >
      <div className="p-5">
        <img
          src="./images/logo-white.svg"
          alt="logo"
          style={{ width: "10%" }}
        />
      </div>
      <img
        src="./images/bg-blue.svg"
        alt="logo"
        style={{ width: "100%", height: "50%" }}
      />
      <div className="mx-auto w-1/2">
        <Button
        onClick={() => {
        history.push("/signin");
        }}
          className="bg_white my-5"
          size={"large"}
          type="primary"
          block
        >
          Get started
        </Button>{" "}
      </div>
    </div>
  );
});

export default Landing;