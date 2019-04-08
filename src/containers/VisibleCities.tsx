import { connect } from 'react-redux';
import { Cities } from 'components/Cities';

const mapStateToProps: any = state => ({
    cities:state.citiesReducer.cities
});

export default connect(
    mapStateToProps,
)(Cities)

