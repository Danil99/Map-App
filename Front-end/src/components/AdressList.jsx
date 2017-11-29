import React from 'react';

export default class AdressList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAdress();
  }

  render() {
    return (
      <div className="adress-list">
        {
          this.props.adressList && this.props.adressList.map((el, i) =>
            <div onClick={() => this.props.changeActiveAdress(el.title)} key={el.id} className={`item ${this.props.adress === el.title ? 'active' : ''}`}>
              <h2>{el.title}</h2>
              {
                i !== 0 &&
                <span onClick={() => this.props.deleteAdress(el.id)} className="close"></span>
              }
            </div>
          )
        }
      </div>
    )
  }
}
