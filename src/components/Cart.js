import { Card, Button } from "react-bootstrap";

export default function Cart() {
    return (
        <Card>
            <Card.Title>Title</Card.Title>
            <Card.Body>
                <p>Sub Title</p>
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