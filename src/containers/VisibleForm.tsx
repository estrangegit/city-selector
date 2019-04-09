import { connect } from 'react-redux';
import { searchCitiesRequest, setSearchedCityName } from 'actions/index';
import { CityForm } from 'components/CityForm';

const mapStateToProps = (state: any, ownProps: any) => ({
    formTitle: ownProps.formTitle,
    searchedCityName: state.citiesReducer.searchedCityName
});

const mapDispatchToProps = (dispatch: any) => ({
    setSearchedCityName: (searchedCityName: string) => dispatch(setSearchedCityName(searchedCityName)),
    searchCitiesRequest: (searchedCityName: string) => dispatch(searchCitiesRequest(searchedCityName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityForm)