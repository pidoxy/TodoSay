import "../styles/signin.css";
import { useState } from "react";
import { Input, Button, notification } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import axios from "axios";

const Microsoft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="16.7452" y="17" width="9.61977" height="10" fill="#FEBA08" />
    <rect x="5.20148" y="17" width="9.61977" height="10" fill="#05A6F0" />
    <rect x="16.7452" y="5" width="9.61977" height="10" fill="#80BC06" />
    <rect x="5.20148" y="5" width="9.61977" height="10" fill="#F25325" />
  </svg>
);

const Google = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
      fill="#4285F4"
    />
    <path
      d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5866 16.2862 24.5866C12.5085 24.5866 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8577 10.6989 30 16.2862 30Z"
      fill="#34A853"
    />
    <path
      d="M8.16007 18.7688C7.85848 17.8977 7.68395 16.9643 7.68395 15.9999C7.68395 15.0354 7.85849 14.1021 8.1442 13.231L8.13621 13.0455L3.67126 9.64734L3.52518 9.71544C2.55696 11.6132 2.0014 13.7444 2.0014 15.9999C2.0014 18.2555 2.55696 20.3865 3.52518 22.2843L8.16007 18.7688Z"
      fill="#FBBC05"
    />
    <path
      d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
      fill="#EB4335"
    />
  </svg>
);

const openNotificationWithIcon = (type, description, placement) => {
  notification[type]({
    message: ` ${type.toUpperCase()}`,
    description,
    placement,
  });
};

export default function Signin() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const URL = `https://todosay.herokuapp.com/api/auth/signup`;

  const submit = (e) => {
    if (
      password === "" &&
      confirmPassword === "" &&
      email === "" &&
      username === ""
    ) {
      openNotificationWithIcon(
        "error",
        "Input your details",
        "topRight"
      );
    } else if (username === "") {
      openNotificationWithIcon(
        "error",
        "Input your username",
        "topRight"
      );
    } else if (email === "") {
      openNotificationWithIcon(
        "error",
        "Input your email",
        "topRight"
      );
    } else if (password === "") {
      openNotificationWithIcon(
        "error",
        "Input your password",
        "topRight"
      );
    } else if (
      password &&
      confirmPassword &&
      email &&
      username &&
      password === confirmPassword
    ) {
      submitHandler();
    } else if (confirmPassword !== password) {
      openNotificationWithIcon(
        "error",
        "Passwords do not match",
        "topRight"
      );
    }
  }

  async function submitHandler() {
    await axios({
      url: URL,
      method: "POST",
      data: {
        username: username,
        email: email,
        password: password,
      },
      headers: {
        clientid: "A6w0Xu6",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);

        console.log(res.data.message);
        if (res.data.success === false) {
          openNotificationWithIcon("error", res.data.message);
        } else if (res.data.success === true) {
          openNotificationWithIcon("success", res.data.message);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex items-center my-5 md:my-0 flex-col-reverse md:flex-row justify-center signin_container align-middle mx-5">
      <div className="flex-1 flex-grow">
        <img
          src="./images/logo.svg"
          alt="logo"
          className="mx-auto md:mx-0 w-1/4"
        />
        <h3 className="my-5">Create Account</h3>
        <p>Sign up to plan your day</p>
        <div className="flex flex-col-reverse md:flex-row md:space-x-5 my-3">
          <Button
            className="flex-1 my-3 md:my-0"
            size={"large"}
            icon={<Microsoft />}
          >
            Sign up with Google
          </Button>
          <Button
            className="flex-1 my-3 md:my-0"
            size={"large"}
            icon={<Google />}
          >
            Sign up with Microsoft
          </Button>
        </div>
        <div>
          <p className="text-center my-5">or signup with email</p>
        </div>
        <div className="space-y-5 m-auto">
          <label className="mt-10 text-error-700">Username</label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            className="mt-0"
            placeholder="Input your username"
          />
          <label className="mt-10 text-error-700">Email</label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="mt-0"
            placeholder="example@example.com"
          />
          <label className="mb-10 ">Password</label>
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            className="mt-0"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="********"
          />
          <label className="mt-10">Confirm Password</label>
          <Input.Password
            onKeyUp={(e) => (e.key === "Enter" ? submit : null)}
            onChange={(e) => setConfirmPassword(e.target.value)}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            placeholder="********"
          />
          <div className="flex ">
            <Input className="m-auto flex-1" type="checkbox" />
            <label className="text-sm flex-3">
              I agree with TODOsay terms of service and privacy policy
            </label>
          </div>
          <Button
            onClick={submit}
            className="bg_primary"
            size={"large"}
            type="primary"
            block
          >
            Sign up
          </Button>
          <p>
            Already have an account? <a href="/signin">Login</a>
          </p>
        </div>
      </div>
      <div className="flex-1 flex">
        <img
          className="mx-auto w-1/2 md:w-full align-middle content-center flex-wrap items-center flex"
          src="./images/auth-bg.svg"
          alt="auth beg"
        />
      </div>
    </div>
  );
}
