import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from "react-bootstrap/Modal";

import DarkModeToggle from "./utils/DarkModeToggle";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <main style={{ position: "relative" }}>
      <DarkModeToggle />

      <Container>
        <h1 className="display-1">Bootstrap</h1>
        <p className="lead">
          Bootstrap (formerly Twitter Bootstrap) is a free and open-source CSS
          framework directed at responsive, mobile-first front-end web
          development. It contains HTML, CSS and (optionally) JavaScript-based
          design templates for typography, forms, buttons, navigation, and other
          interface components. As of May 2023, Bootstrap is the 17th most
          starred project (4th most starred library) on GitHub, with over
          164,000 stars. According to W3Techs, Bootstrap is used by 19.2% of all
          websites.
        </p>
        <div className="d-flex align-items-end gap-2">
          <DropdownButton
            id="dropdown-button-dark-example"
            variant="secondary"
            title="More Actions"
            className="mt-2"
          >
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </DropdownButton>
          <Button variant="primary" onClick={handleShow}>
            More Info
          </Button>
        </div>
        <Card style={{ width: "18rem", marginTop: "2rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/300/150" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Header</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}

export default App;
