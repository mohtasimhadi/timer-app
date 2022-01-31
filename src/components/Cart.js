import { Card, Button } from "react-bootstrap";

export default function Cart(props) {
    return (
        <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Body>
                <p>{props.subtitle}</p>
                <p>time</p>
                <Button>Delete</Button>
                <Button>Edit</Button>
            </Card.Body>
            <Card.Footer>
                <Button>Start</Button>
            </Card.Footer>
        </Card>
    )
}