import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Form } from "./components/Form/Form.jsx";
import { Input } from "./components/Input/Input.jsx";
import { Button } from "./components/Button/Button.jsx";
import { Main } from "./components/Main/Main.jsx";

function App() {
  return (
    <div className="wrapper">
      <Header>
        <Form>
          <Input placeholder="Search for the order #"></Input>
        </Form>
      </Header>
      <Main>
        <Form formClass="login-form">
          <Input type="text" placeholder="Your full name" />
          <Button text="Login" />
        </Form>
      </Main>
    </div>
  );
}

export default App;
