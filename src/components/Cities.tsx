import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import VisibleForm from 'containers/VisibleForm';
import { CityList } from 'components/CityList';

export class Cities extends React.Component<{cities: any[]}> {
  constructor (props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <div className="jumbotron">
              <h1>City selector</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <VisibleForm formTitle="Search for a city" />
          </Col>
        </Row>
        {this.props.cities.length > 0 && (
          <Row>
            <Col>
              <CityList
                cityListTitle="List of cities found"
                cities={this.props.cities}
              />
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
