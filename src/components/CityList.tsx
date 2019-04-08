import * as React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { City } from 'components/City';

export const CityList = (props: any) => {
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
              <City id={city.code} city={city} />
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};