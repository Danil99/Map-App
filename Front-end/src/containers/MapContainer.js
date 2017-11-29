import { connect } from 'react-redux';

import Map from '../components/Map';

function mapStateToProps(state) {
  return {
    adress: state.activeAdress
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, null)(Map);
