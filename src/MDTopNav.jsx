import React, { PropTypes } from 'react';
import styles from './MDTopNav.css';
import logo from './logo.png';

const zip = rows => rows[0].map(
  (_, c) => rows.map( row => row[c])
);

const MDTopNav = (props) => {
  const { items, urls } = props;
  if (items.length !== urls.length) {
    return <div>{'items and urls don\'t match'}</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <img className={styles.logo} src={logo} />
        <div className={styles.items}>
          {
            zip([items, urls]).map((tuple) => {
              const [item, url] = tuple;
              return (
                <div className={styles.item}>
                  <a className={styles.link} href={url}>{item}</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

MDTopNav.propsTypes = {
  logo: PropTypes.String,
  items: PropTypes.arrayOf(PropTypes.String),
  urls: PropTypes.arrayOf(PropTypes.String),
};

export default MDTopNav;
