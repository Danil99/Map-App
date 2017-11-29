import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';

import { onAddAdress } from '../action';

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    addAdress: (adress, current) => dispatch(onAddAdress(adress, current))
  }
}

export default connect(null, mapDispatchToProps)(Sidebar);
