import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddStudent from "./screens/AddStudent";
import Students from "./screens/Students";
import Header from "./components/Header";
import Home from "./screens/Home";
import { Container } from "react-bootstrap";
import LoginScreen from "./screens/LoginScreen";
import RegisterUserScreen from "./screens/RegisterUserScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/students" component={Students} />
          <Route path="/addstudent" component={AddStudent} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterUserScreen} />
        </Switch>
      </Container>
      <Footer/>
    </main>
  );
}

export default App;
