import { Header } from "../../pages/Header/Header.tsx";
import { Outlet } from "react-router-dom";
import { Input } from "../Input/Input.tsx";
import { Form } from "../Form/Form.tsx";
import { FC } from "react";

export const Layout: FC = () => {
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
