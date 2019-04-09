import { connect } from 'react-redux';
import { CityList } from 'components/CityList';
import { MCity } from 'model/MCity';
import { setCity, setRedirectDetails } from 'actions/index';

const mapStateToProps = (state: any, ownProps: any) => ({
    cityListTitle: ownProps.cityListTitle,
    cities: state.citiesReducer.cities,
    redirectDetails: state.citiesReducer.redirectDetails
});

const mapDispatchToProps = (dispatch: any) => ({
    setCity: (city: MCity) => dispatch(setCity(city)),
    setRedirectDetails: (redirectDetails: boolean) => dispatch(setRedirectDetails(redirectDetails))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityList)