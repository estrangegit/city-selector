import { connect } from 'react-redux';
import { setCity, searchCitiesRequest } from 'actions/index';
import { CityForm } from 'components/CityForm';
import { MCity } from 'model/MCity';

const mapStateToProps = (state: any, ownProps: any) => ({
    formTitle: ownProps.formTitle,
    city: state.citiesReducer.city
});

const mapDispatchToProps: any = dispatch => ({
    setCity: (city: MCity) => dispatch(setCity(city)),
    searchCitiesRequest: (city: MCity) => dispatch(searchCitiesRequest(city))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForm)