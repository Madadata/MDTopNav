import React, { PropTypes, Component } from 'react';
import styles from './MDTopNav.css';
import MDlogo from './logo.png';

const zip = rows => rows[0].map(
  (_, c) => rows.map( row => row[c])
);

class MDTopNav extends Component {

  constructor() {
    super();
  }

  getLogo() {
    const { logo } = this.props;
    return !!logo ?
           <img className={styles.logo} src={logo} /> :
           <img className={styles.logo} src={MDlogo} />;
  }

  getItems() {
    const { items, urls } = this.props;
    if (!!items && !!urls && items.length === urls.length) {
      return (
        <div className={styles.items}>
          {
            zip([items, urls]).map((tuple, i) => {
              const [item, url] = tuple;
              return (
                <div className={styles.item} key={i}>
                  <a className={styles.link} href={url}>{item}</a>
                </div>
              )
            })
          }
        </div>
      )
    }
    return <div>{'items and urls don\'t match'}</div>;
  }

  render() {
    const logoJSX = this.getLogo();
    const itemsJSX = this.getItems();
    return (
      <div className={styles.container}>
        <div className={styles.list}>
          {logoJSX}
          {itemsJSX}
        </div>
      </div>
    );
  }

}

MDTopNav.propsTypes = {
  logo: PropTypes.String,
  items: PropTypes.arrayOf(PropTypes.String),
  urls: PropTypes.arrayOf(PropTypes.String),
};

export default MDTopNav;
