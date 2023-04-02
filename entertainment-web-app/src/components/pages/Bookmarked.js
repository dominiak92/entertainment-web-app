import React, { useCallback } from "react";
import useFirebaseData from "../hooks/useAxios";
import styles from './elements/DataCards.module.scss'
import DataCards from "./elements/DataCards";
import { useState, useEffect } from "react";
import playIcon from "./assets/icon-play.svg";
import movieIcon from "./assets/icon-category-movie.svg";
import tvseriesIcon from "./assets/icon-category-tv.svg";
import BookmarkButton from "../UI/bookmarkButton";


const Bookmarked = () => {
  const firebaseUrl =
    "https://react-http-84e0c-default-rtdb.europe-west1.firebasedatabase.app/data.json";
  const { data, error, isLoading, seed} = useFirebaseData(firebaseUrl);

  useEffect(() => {
    console.log('Bookmarked rerender')
  }, [seed]);
const newArray = [];
  return (
    <>

 <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        {data &&
          data.filter(item => item.isBookmarked)
          .map((item, index) => <div key={index} className={styles.element}>
                  <div
                    style={{
                      backgroundImage: `url(${require(`./assets${item.thumbnail.regular.small}`)})`,
                    }}
                    className={styles.card}
                    key={item.title}
                  >
                    <BookmarkButton
                      isBookmarked={item.isBookmarked}
                      index={index}
                    />
                    
                    <div className={styles.overlay}>
                      <img
                        className={styles.playButton}
                        src={playIcon}
                        alt="play"
                      />
                    </div>
                  </div>
                  <div className={styles.infoWrapper}>
                    <div className={styles.upperInfo}>
                      <p className={styles.year}>{item.year}</p>
                      <div className={styles.dot}></div>
                      <div className={styles.categoryWrapper}>
                        <img
                          className={styles.movieIcon}
                          src={`${
                            item.category === "Movie" ? movieIcon : tvseriesIcon
                          }`}
                          alt="movie icon"
                        />
                        <p className={styles.category}>{item.category}</p>
                      </div>
                      <div className={styles.dot}></div>
                      <p className={styles.ratingText}>{item.rating}</p>
                    </div>
                    <div className={styles.lowerInfo}>
                      <p className={styles.title}>{item.title}</p>
                    </div>
                  </div>
                </div>)} 
        {/* { props.isLoading && (
          <div>
            <CircularProgress />
          </div>
        )} */}
      </div>
    </div>
    </>
  );
};

export default Bookmarked;
