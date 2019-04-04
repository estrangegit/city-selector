import { connect } from 'react-redux';
import { setCity } from 'actions';
import { searchCitiesRequest } from '../actions';
import CityForm from 'components/CityForm';

const mapStateToProps = (state, ownProps) => ({
    formTitle: ownProps.formTitle,
    city: state.citiesReducer.city
});

const mapDispatchToProps = dispatch => ({
    setCity: (city) => dispatch(setCity(city)),
    searchCitiesRequest: (city) => dispatch(searchCitiesRequest(city))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForm)