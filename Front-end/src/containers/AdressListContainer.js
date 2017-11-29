import { connect } from 'react-redux';

import AdressList from '../components/AdressList';

import { onGetAdress, onChangeActiveAdress, onDeleteAdress } from '../action';

function mapStateToProps(state) {
  return {
    adressList: state.adressList,
    adress: state.activeAdress
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAdress: () => dispatch(onGetAdress()),
    changeActiveAdress: adress => dispatch(onChangeActiveAdress(adress)),
    deleteAdress: id => dispatch(onDeleteAdress(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdressList);
