import React from "react";
import logo from "./../../assets/logo.svg";
import styles from "./Header.module.scss";
import avatar from "./../../assets/image-avatar.png";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TvIcon from '@mui/icons-material/Tv';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import WindowIcon from '@mui/icons-material/Window';
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {

  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };




  return (
    <>
      <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.menu}>

        <BottomNavigation sx={{ width: '100%' }} value={value} onChange={handleChange}> 
          <BottomNavigationAction className={styles.button} component={Link} to="/" label="Home" value="home" icon={<WindowIcon />} />
          <BottomNavigationAction className={styles.button} component={Link} to="/movies" label="Movies" value="movies" icon={<LocalMoviesIcon />} />
          <BottomNavigationAction className={styles.button} component={Link} to="/tvseries" label="TV Series" value="tvseries" icon={<TvIcon />} />
          <BottomNavigationAction className={styles.button} component={Link} to="/bookmarked" label="Bookmarked" value="bookmarked" icon={<BookmarkIcon />} />
          </BottomNavigation>

        </div>
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </div>
    </>
  );
};

export default Header;
