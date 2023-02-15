import { useState } from "react";
import { Col, Form, ListGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  let [inputValue, setInputValue] = useState("");
  let [store, setStore] = useState([]);

  let inputChange = (e) => {
    setInputValue(e.target.value); //inputValue = e.target.value;
  };

  const onAdd = () => {
    setStore([...store, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <p class="text-center">
                <h1>WebSite To-Do</h1>
              </p>
            </Navbar.Brand>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
      </div>

      <div className="m-2">
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Write Notes</Form.Label>
                <Form.Control
                  placeholder="Add To-Do Task"
                  type="text"
                  value={inputValue}
                  onChange={inputChange}
                />
              </Form.Group>
            </Col>

            <Col className="m-4">
              <Button variant="success" onClick={onAdd}>
                Add
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <ListGroup.Item variant="success">
        <div>
          {store.map((ele) => (
            <h1>{ele}</h1>
          ))}
        </div>
      </ListGroup.Item>
    </div>
  );
}

export default App;
