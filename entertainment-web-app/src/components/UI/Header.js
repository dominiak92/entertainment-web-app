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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from "react";
import { dataContext } from "../pages/elements/dataContext";
import Badge from '@mui/material/Badge';


const Header = () => {

const theme = createTheme({
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          width: '300px'
        }
      }
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        label: {
          fontFamily: 'Outfit',
          color: 'white',
          '&.Mui-selected': {
            fontSize: '0.8rem'
          }
        },
        root: {
          color: '#5A698F',
          paddingLeft: '0px',
          paddingRight: '0px',
          minWidth: '57px',
          fontSize: '0.5rem',
          '&.Mui-selected': {
            color: '#FFFFFF',
            fontFamily: 'Outfit',
          },
        },
      },
    },
  },
});

  const { countBookmarked } = useContext(dataContext);
 let count = countBookmarked()

  const [value, setValue] = useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
        <div className={styles.menu}>
        <ThemeProvider theme={theme}>
        <BottomNavigation className={styles.navigation} value={value} onChange={handleChange}> 
          <BottomNavigationAction className={styles.button} component={Link} to="/" label="Home" value="home" icon={<WindowIcon className={styles.button} />} />
          <BottomNavigationAction className={styles.button} component={Link} to="/movies" label="Movies" value="movies" icon={<LocalMoviesIcon className={styles.button} />} />
          <BottomNavigationAction className={styles.button} component={Link} to="/tvseries" label="TV Series" value="tvseries" icon={<TvIcon className={styles.button} />} />
         <BottomNavigationAction className={styles.button} component={Link} to="/bookmarked" label="Bookmarked" value="bookmarked" icon={ <Badge badgeContent={count} color="primary"><BookmarkIcon className={styles.button} /></Badge>} />
          </BottomNavigation>
</ThemeProvider>
        </div>
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </div>
    </>
  );
};

export default Header;
