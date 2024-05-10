import "./App.css";
import { Form } from "./components/Form/Form.tsx";
import { Input } from "./components/Input/Input.tsx";
import { Button } from "./components/Button/Button.tsx";
import { Main } from "./components/Main/Main.tsx";
import { Menu } from "./components/Menu/Menu.tsx";
import { Layout } from "./pages/Layout.tsx";
import { Login } from "./components/Login/Login.tsx";
import { Routes, Route } from "react-router-dom";
import { FC } from "react";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Main>
              <Form formClass="login-form">
                <Input type="text" placeholder="Your full name" />
                <Button text="Login" />
              </Form>
            </Main>
          }
        />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
