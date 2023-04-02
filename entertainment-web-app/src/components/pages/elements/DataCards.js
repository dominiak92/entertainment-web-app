import CircularProgress from "@mui/material/CircularProgress";
import styles from "./DataCards.module.scss";
import playIcon from "../assets/icon-play.svg";
import movieIcon from "../assets/icon-category-movie.svg";
import tvseriesIcon from "../assets/icon-category-tv.svg";
import BookmarkButton from "../../UI/bookmarkButton";
import { useState, useEffect } from "react";

const DataCards = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.cardWrapper}>
        {props.data &&
          props.data.map((item, index) =>
            props.type.includes(item.category) &&
            (props.isTrending ? !item.isTrending : true) ? (
                <div key={index} className={styles.element}>
                  <div
                    style={{
                      backgroundImage: `url(${require(`../assets${item.thumbnail.regular.small}`)})`,
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
                </div>
            ) : null
          )}
        {/* { props.isLoading && (
          <div>
            <CircularProgress />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DataCards;
