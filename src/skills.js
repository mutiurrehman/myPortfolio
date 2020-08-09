import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

export const Skills = () => {
  return (
    <CardDeck>
      <Card className="p-2 rounded">
        <CardImg
          top
          width="100%"
          src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="intromoti">Full Stack Developer</CardTitle>
          <CardText>
            <p>
              I've done many little colledge Projects. I'love to create
              interactive websites.
            </p>
            <ListGroup className="font-weight-bolder">
              <ListGroupItem>Css Bootstrap 4</ListGroupItem>
              <ListGroupItem>Node.Js /Javascript /Jquery</ListGroupItem>
              <ListGroupItem>Express/React.Js </ListGroupItem>
              <ListGroupItem>MySql/Socket.io </ListGroupItem>
            </ListGroup>
          </CardText>
        </CardBody>
      </Card>
      <Card className="p-2 rounded">
        <CardImg
          top
          width="100%"
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="intromoti">Competitive Programming</CardTitle>
          <CardText>
            <ListGroup className="font-weight-bolder">
              <ListGroupItem>Java</ListGroupItem>
              <ListGroupItem>Leetcode/ 170 Q+</ListGroupItem>
              <ListGroupItem>Code Forces/Code Chef</ListGroupItem>
            </ListGroup>
          </CardText>
        </CardBody>
      </Card>
      <Card className="p-2 rounded">
        <CardImg
          top
          width="100%"
          src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle className="intromoti">Problem SOlving</CardTitle>
          <CardSubtitle>I love solving problems</CardSubtitle>
          <CardText>
            The very first is to solve the problem by building an Algorithm.
            Then coverting your Algorithm into code.
            <span className="font-weight-bolder">
              “First, solve the problem. Then, write the code.” – John Johnson
            </span>
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};
