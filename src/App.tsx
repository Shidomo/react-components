import "./App.css";
import { Form } from "./components/Form/Form.tsx";
import { Input } from "./components/Input/Input.tsx";
import { Button } from "./components/Button/Button.tsx";
import { Main } from "./pages/Main/Main.tsx";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { FC } from "react";
import { Orders } from "./pages/Orders/Orders.tsx";
import { Counter } from "./pages/Counter/Counter.tsx";
import { NewMane } from "./components/newMane/NewMane.tsx";
import { Cart } from "./components/Cart/Cart.tsx";
import OrderDetails from "./pages/OrderDetails/OrderDetails.tsx";
/*import { OrderDetails } from "./pages/OrderDetails/OrderDetails.tsx";*/

const App: FC = () => {
  const RedirectToMain = () => <Navigate to="/" />;

  return (
    <>
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
          <Route path="/order/new" element={<Orders />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="*" element={<RedirectToMain />} />
        </Route>
      </Routes>

      {/*<Cart />*/}
    </>
  );
};

export default App;
