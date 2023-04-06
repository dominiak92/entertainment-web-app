import { useState, useContext } from "react";
import styles from "./bookmarkButton.module.scss";
import bookmarkEmpty from "./icon-bookmark-empty.svg";
import bookmarkFull from "./icon-bookmark-full.svg";
import axios from "axios";
import { dataContext } from "../pages/elements/dataContext";

const BookmarkButton = ({ index}) => {
  
  const { data, forceUpdate } = useContext(dataContext);
 const { isBookmarked } = data[index];
  const [clicked, setClicked] = useState(isBookmarked);

  const isClicked = async () => {
    setClicked(!clicked);
    try {
      const response = await axios.get(
        `https://entertainment-api.herokuapp.com/data/${index}`
      );
      const singleObject = response.data;
      singleObject.isBookmarked = !isBookmarked;
      await axios.put(
        `https://entertainment-api.herokuapp.com/data/${index}`,
        singleObject
      );

      forceUpdate();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <button
      onClick={() => isClicked()
      }
      style={{
        backgroundImage: `url(${clicked ? bookmarkFull : bookmarkEmpty})`,
      }}
      className={styles.bookmarkButton}
    ></button>
  );
};

export default BookmarkButton; 
