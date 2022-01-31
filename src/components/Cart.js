import { Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function Cart(props) {
  const [editButton, setEditButton] = useState(false);
  const [cartData, setCartData] = useState({
    title: props.title,
    subtitle: props.subtitle,
  });

  const { title, subtitle } = cartData;

  function onClickEdit() {
    setEditButton(true);
  }

  function onClickSubmit() {
      setEditButton(false)
  }

  function onChangeForm(e) {
    setCartData({ ...cartData, [e.target.name]: e.target.value})
  }

  return (
    <>
      {!editButton && (
        <Card>
          <Card.Title>{title}</Card.Title>
          <Card.Body>
            <p>{subtitle}</p>
            <p>time</p>
            <Button>Delete</Button>
            <Button onClick={onClickEdit}>Edit</Button>
          </Card.Body>
          <Card.Footer>
            <Button>Start</Button>
          </Card.Footer>
        </Card>
      )}
      {editButton && (
        <Form>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder={title} name='title' onChange={onChangeForm} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="subtitle">
            <Form.Label>Subtitle</Form.Label>
            <Form.Control type="text" placeholder={subtitle} name='subtitle' onChange={onChangeForm} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onClickSubmit}>
            Submit
          </Button>
        </Form>
      )}
    </>
  );
}
