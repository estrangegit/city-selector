import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const City = (props) => {
  return (
    <Card.Body>
      <Card.Title as="h3">{props.name}</Card.Title>
      <Card.Text>Population: {props.population}</Card.Text>
    </Card.Body>
  );
};

City.propTypes = {
  name: PropTypes.string,
  population: PropTypes.number
};

export default City;
