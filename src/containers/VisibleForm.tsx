import { connect } from 'react-redux';
import { setCity } from 'actions';
import { searchCitiesRequest } from 'actions';
import { CityForm } from 'components/CityForm';
import { MCity } from 'model/MCity';

const mapStateToProps = (state: any, ownProps: any) => ({
    formTitle: ownProps.formTitle,
    city: state.citiesReducer.city
});

const mapDispatchToProps = dispatch => ({
    setCity: (city: MCity) => dispatch(setCity(city)),
    searchCitiesRequest: (city: MCity) => dispatch(searchCitiesRequest(city))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForm)