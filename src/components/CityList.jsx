import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import City from './City';

const CityList = (props) => {
  return (
    <div>
      <Row>
        <Col>
          <h3 className="text-center">{props.cityListTitle}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          {props.cities.map((city) => (
            <Card bg="light" key={city.code}>
              <City id={city.code} name={city.name} population={city.population}/>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

CityList.propTypes = {
  cityListTitle: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
};

export default CityList;
