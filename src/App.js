import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import { data } from "./data"; // 확장자 생략해도 봐줌

function App() {
  const [shoes] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">태키 쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {shoes.map((item) => {
            return <ShoesList item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

const ShoesList = ({ item }) => {
  return (
    <div className="col-md-4">
      <img src={item.url} width="80%" />
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </div>
  );
};

export default App;
