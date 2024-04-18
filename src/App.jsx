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
          <Input inputPlaceholder="Search for the order #"></Input>
        </Form>
      </Header>
      <Main>
        <Form formClass="login-form">
          <Input inputType="text" inputPlaceholder="Your full name" />
          <Button btnText="Login" />
        </Form>
      </Main>
    </div>
  );
}

export default App;
