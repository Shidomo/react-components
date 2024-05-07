import "./App.css";
import { Form } from "./components/Form/Form.jsx";
import { Input } from "./components/Input/Input.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Main } from "./components/Main/Main.jsx";
import { Menu } from "./components/Menu/Menu.jsx";
import { Layout } from "./pages/Layout.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
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
}

export default App;
