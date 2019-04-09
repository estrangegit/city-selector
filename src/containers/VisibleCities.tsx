import { connect } from 'react-redux';
import { Cities } from 'components/Cities';

const mapStateToProps = (state: any) => ({
    cities:state.citiesReducer.cities
});

export default connect(
    mapStateToProps
)(Cities)

