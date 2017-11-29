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
            <div key={el._id} className={`item ${this.props.adress === el.title ? 'active' : ''}`}>
              <h2 onClick={() => this.props.changeActiveAdress(el.title)}>{el.title}</h2>
              {
                i !== 0 &&
                <span onClick={() => this.props.deleteAdress(el._id)} className="close"></span>
              }
            </div>
          )
        }
      </div>
    )
  }
}
