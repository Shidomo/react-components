import { Header } from "../components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Input } from "../components/Input/Input.jsx";
import { Form } from "../components/Form/Form.jsx";

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header>
        <Form>
          <Input placeholder="Search for the order #"></Input>
        </Form>
      </Header>
      <Outlet />
    </div>
  );
};
