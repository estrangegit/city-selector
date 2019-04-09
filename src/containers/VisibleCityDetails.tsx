import { connect } from 'react-redux';
import { CityDetails} from 'components/CityDetails';
import { setRedirectDetails } from 'actions/index';

const mapStateToProps = (state: any) => ({
    city:state.citiesReducer.city
});

const mapDispatchToProps = (dispatch: any) => ({
    setRedirectDetails: (redirectDetails: boolean) => dispatch(setRedirectDetails(redirectDetails))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityDetails)

