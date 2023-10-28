import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function ResultCard({ data }) {
  return (
    <Card border="success" bg="dark" text="light" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={data.images.jpg.large_image_url} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.synopsis}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item variant="success">
          Current Status: {data.status}
        </ListGroup.Item>
        {/* <ListGroup.Item variant="success">
          Aired from: {data.aired.string}
        </ListGroup.Item> */}
        <ListGroup.Item variant="success">Score: {data.score}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link bg="dark" href={data.url}>
          Find out more
        </Card.Link>
        {/* <Card.Link href={data.trailer.url}>Trailer</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default ResultCard;
