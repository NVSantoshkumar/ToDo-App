import { useState } from "react";
import { Col, Form, ListGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  let [inputValue, setInputValue] = useState();
  let [store, setStore] = useState([]);

  let inputChange = (e) => {
    setInputValue(e.target.value); //inputValue = e.target.value;
  };

  const onAdd = () => {
    if (inputValue == null || inputValue == "") {
      alert("Please enter the Note. Can’t be blank or empty !!!");

      return false;
    } else {
      setStore([...store, inputValue]);
    }
    setInputValue("");
  };

  const onDelete = (rowIndex) => {
    store.splice(rowIndex, 1);
    setStore([...store]);
  };

  return (
    <div>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <h2>To Do App</h2>
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

      <div className="m-4">
        <ListGroup>
          {store.map((ele, index) => (
            <Container key={`row-${index}`}>
              <Row>
                <Col sm={10}>
                  <ListGroup.Item variant="success" className="m-2">
                    <h5 className="m-10">
                      {index + 1}. {ele}
                    </h5>
                  </ListGroup.Item>
                </Col>
                <Col
                  sm={2}
                  className="d-flex align-items-center justify-content-sm-center"
                >
                  <Button
                    variant="success"
                    onClick={() => {
                      onDelete(index);
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Container>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
