import * as React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { City } from 'components/City'
import { MCity } from 'model/MCity';
import { Redirect } from 'react-router';

interface CityListProps {
  cityListTitle: string,
  cities: MCity[],
  redirectDetails: boolean,
  setCity: (city: MCity) => any,
  setRedirectDetails: (redirectDetails: boolean) => any
}

export class CityList extends React.Component<CityListProps, any> {

  constructor(props: any){
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick = (city:MCity) => {
    this.props.setCity(city);
    this.props.setRedirectDetails(true);
  }

  render() {

    if(this.props.redirectDetails){
      return <Redirect push to='/details'/>;
    }

    return (
      <div>
        <Row>
          <Col>
            <h3 className="text-center">{this.props.cityListTitle}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.cities.map((city: any) => (
              <Card bg="light" key={city.code} onClick={() => this.handleOnclick(city)}>
                <City id={city.code} city={city} />
              </Card>
            ))}
          </Col>
        </Row>
      </div>
    )
  }
}
