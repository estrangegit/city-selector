import * as React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { MCity } from 'model/MCity';

interface CityFormProps {
    formTitle: string,
    city: MCity,
    searchCitiesRequest: (city: MCity) => any,
    setCity: (city: MCity) => any,
}

export class CityForm extends React.Component<CityFormProps, any>{

    constructor(props: any){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const name = this.props.city.name;
        const city = {...this.props.city, name};
        this.props.searchCitiesRequest(city);
    };

    handleNameChange = (event: any) => {
        const tempName = event.target.value;
        const tempCity = {...this.props.city, name:tempName};
        this.props.setCity(tempCity);
    };

    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <h3 className="text-center">{this.props.formTitle}</h3>
                    </Col>
                </Row>
                <Form onSubmit={this.handleSubmit}>
                    <Row className="justify-content-md-center">
                        <Col xs lg="3">
                            <Form.Group>
                                <Form.Control type="text" placeholder="city name" value={this.props.city.name} onChange= {this.handleNameChange}/>
                            </Form.Group>
                        </Col>
                        <Col xs lg="2">
                            <div>
                                <Button className="Light"  type="submit">Search</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}