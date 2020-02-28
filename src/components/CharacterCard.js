import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import "./card.css";

export default function CharacterCard({character}) {

    return (
        <Card className="cont">
          <div  className="pic">
          <CardImg top width="100%" src={character.image} alt={character.name} />
          </div>
          <CardBody>
          <CardTitle>{character.name}</CardTitle>
           <CardText>{character.name} is from planet {character.location.name}. {character.name} gender is {character.gender}</CardText>
            <CardText>
            </CardText>
          </CardBody>
        </Card>
  )
};


