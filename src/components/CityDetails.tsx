import * as React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { MCity } from 'model/MCity'
import { NavLink } from 'react-router-dom';

interface CityDetailsProps {
  city: MCity
  setRedirectDetails: (redirectDetails: boolean) => any
}

export class CityDetails extends React.Component<CityDetailsProps, any> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.props.setRedirectDetails(false)
  }

  render() {

    const zipCodes = this.props.city.zipCodes.join(', ');

    return (
      <div>
        <Row>
          <Col>
            <div className="jumbotron">
              <h1>{this.props.city.name} details</h1>
              <h3><NavLink to="/">Back to search</NavLink></h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="light">
              <Card.Body>
                <Card.Title as="h3">Name</Card.Title>
                <Card.Text>{this.props.city.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="light">
              <Card.Body>
                <Card.Title as="h3">Population</Card.Title>
                <Card.Text>{this.props.city.population} people</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="light">
              <Card.Body>
                <Card.Title as="h3">Zip Codes</Card.Title>
                <Card.Text>{ zipCodes }</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="light">
              <Card.Body>
                <Card.Title as="h3">Department code</Card.Title>
                <Card.Text>{ this.props.city.departmentCode }</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card bg="light">
              <Card.Body>
                <Card.Title as="h3">Region code</Card.Title>
                <Card.Text>{ this.props.city.regionCode }</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
