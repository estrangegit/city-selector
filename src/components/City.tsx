import * as React from 'react';
import { Card } from 'react-bootstrap';
import { MCity } from 'model/MCity';

interface CityProps {city:MCity, id: number};

export const City = (props: CityProps) => {
  return (
    <Card.Body>
      <Card.Title as="h3">{props.city.name}</Card.Title>
    </Card.Body>
  );
};