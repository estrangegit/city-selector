import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Row, Col } from 'react-bootstrap';

class CityForm extends React.Component{

    constructor(props){
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let name = this.props.city.name;    
        let city = {...this.props.city, name:name}
        this.props.searchCities(city);
    }

    handleNameChange = (event) => {
        let tempName = event.target.value;    
        let tempCity = {...this.props.city, name:tempName}
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
                    <Row>
                        <Col lg={{span:4, offset:2}}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="city name" value={this.props.city.name} onChange= {this.handleNameChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
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

CityForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
    city: PropTypes.object,
    setCity: PropTypes.func,
    searchCities: PropTypes.func
  };
  
export default CityForm;