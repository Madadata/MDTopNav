import React, { PropTypes, Component } from 'react';
import styles from './MDTopNav.css';
import MDlogo from './logo.png';

const zip = rows => rows[0].map(
  (_, c) => rows.map(row => row[c])
);

class MDTopNav extends Component {

  getLogo() {
    const { logo } = this.props;
    return !!logo ?
      <img alt="logo" className={styles.logo} src={logo} /> :
      <img alt="logo" className={styles.logo} src={MDlogo} />;
  }

  getItems() {
    const { items, urls } = this.props;

    if (!items) {
      return null;
    } else if (!urls) {
      return (
        <div className={styles.items}>
          {
            items.map((item, i) => <div className={styles.item} key={i}></div>)
          }
        </div>
      );
    } else if (items.length !== urls.length) {
      return <div>{'items and urls don\'t match'}</div>;
    }
    return (
      <div className={styles.items}>
        {
          zip([items, urls]).map((tuple, i) => {
            const [item, url] = tuple;
            return (
              <div className={styles.item} key={i}>
                <a className={styles.link} href={url}>{item}</a>
              </div>
            );
          })
        }
      </div>
    );
  }

  render() {
    const logoJSX = this.getLogo();
    const itemsJSX = this.getItems();
    const { isFixed } = this.props;
    return (
      <div className={styles.container} style={isFixed ? { position: 'fixed' } : {}}>
        <div className={styles.list}>
          {logoJSX}
          {itemsJSX}
        </div>
      </div>
    );
  }

}

MDTopNav.propTypes = {
  logo: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  urls: PropTypes.arrayOf(PropTypes.string),
  isFixed: PropTypes.bool,
};

export default MDTopNav;
