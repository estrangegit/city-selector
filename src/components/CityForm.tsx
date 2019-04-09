import * as React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface CityFormProps {
    formTitle: string,
    searchedCityName: string,
    setSearchedCityName: (searchedCityName: string) => any,
    searchCitiesRequest: (searchedCityName: string) => any,
}

export class CityForm extends React.Component<CityFormProps, any>{

    constructor(props: any){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const name = this.props.searchedCityName;
        this.props.searchCitiesRequest(name);
    };

    handleNameChange = (event: any) => {
        const tempSearchedCityname = event.target.value;
        this.props.setSearchedCityName(tempSearchedCityname);
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
                                <Form.Control type="text" placeholder="city name" value={this.props.searchedCityName} onChange= {this.handleNameChange}/>
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