import { useState, useEffect, useCallback } from "react";
import styles from "./bookmarkButton.module.scss";
import bookmarkEmpty from "./icon-bookmark-empty.svg";
import bookmarkFull from "./icon-bookmark-full.svg";
import useFirebaseData from "../hooks/useAxios";

const BookmarkButton = ({ isBookmarked, index }) => {
  const firebaseUrl =
    "https://react-http-84e0c-default-rtdb.europe-west1.firebasedatabase.app/data.json";
  const { putData } = useFirebaseData(firebaseUrl);

  const [clicked, setClicked] = useState(false);

  const isClicked = useCallback(() => {
    console.log('button rerender')
    putData(!isBookmarked, index);
    setClicked((prevState) => !prevState);
  }, [isBookmarked, index, putData]);

  return (
    <button
      onClick={isClicked}
      style={{
        backgroundImage: `url(${clicked ? bookmarkFull : bookmarkEmpty})`,
      }}
      className={styles.bookmarkButton}
    ></button>
  );
};

export default BookmarkButton;
