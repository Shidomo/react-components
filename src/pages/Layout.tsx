import { Header } from "../components/Header/Header.js";
import { Outlet } from "react-router-dom";
import { Input } from "../components/Input/Input.js";
import { Form } from "../components/Form/Form.js";
import React, { FC, JSX } from "react";

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
