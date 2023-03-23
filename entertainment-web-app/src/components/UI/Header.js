import React from "react";
import logo from "./../../assets/logo.svg";
import styles from "./Header.module.scss";
import homeIco from "./../../assets/icon-nav-home.svg";
import moviesIco from "./../../assets/icon-nav-movies.svg";
import tvseriesIco from "./../../assets/icon-nav-tv-series.svg";
import bookmarkIco from "./../../assets/icon-nav-bookmark.svg";
import avatar from './../../assets/image-avatar.png'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.menu}>
          <img className={styles.icon} src={homeIco} alt="home" />
          <img className={styles.icon} src={moviesIco} alt="movies" />
          <img className={styles.icon} src={tvseriesIco} alt="tv series" />
          <img className={styles.icon} src={bookmarkIco} alt="bookmark" />
        </div>
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </div>
    </>
  );
};

export default Header;
