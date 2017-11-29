import React from 'react';

import AdressListContainer from '../containers/AdressListContainer';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = ('lat ' + position.coords.latitude).match(/\d+/g);
        let lon = ('lon ' + position.coords.longitude).match(/\d+/g);
        this.props.addAdress(`${lat[0]}.${lat[1].slice(0,4)} ${lon[0]}.${lon[1].slice(0,4)}`, true);
      }, () => this.props.addAdress('Kyiv', true));
    } else {
      console.error('error');
      this.props.addAdress('Kyiv', true);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    let adress = this.refs.adress.value;
    if(adress !== '') {
      this.props.addAdress(adress);
      this.refs.adress.value = '';
    }
  }

  render() {
    return (
      <div className="sidebar">
        <form onSubmit={this.handleSubmit} className="add-adress">
          <input ref="adress" type="text" placeholder="Введите адресс" />
          <button>
            <svg width="20" height="20" viewBox="0, 0, 55, 55">
              <circle r="19" cx="19" cy="19"></circle>
              <circle r="14" cx="19" cy="19" fill="#fff"></circle>
              <polyline points="30,30 50,50"></polyline>
            </svg>
          </button>
        </form>

        <AdressListContainer />
      </div>
    )
  }
}
