import React from "react";
import BookmarkButton from "../bookmarkButton";
import styles from "./SearchElement.module.scss";
import movieIcon from "../../../assets/icon-category-movie.svg";
import tvseriesIcon from "../../../assets/icon-category-tv.svg";
import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import PlayButton from "../PlayButton";

const SearchElement = (props) => {
  const { searchText, filteredData } = useContext(SearchContext);
  const bookmarked = filteredData.filter((element) => element.isBookmarked);

  const dataToUse = props.location === "bookmarked" ? bookmarked : filteredData;
  const lengthToUse = props.location === "bookmarked" ? bookmarked.length : props.length

  return (
    <>
      <p>
        We found {lengthToUse !== 0 ? lengthToUse : "no"} results for '
        {searchText}'
      </p>
      <div className={styles.cardWrapper}>
        {dataToUse &&
          dataToUse.map((item, index) =>
            props.type.includes(item.category) &&
            (props.isBookmarked ? item.isBookmarked : true) &&
            (props.isTrending ? !item.isTrending : true) ? (
              <div key={index} className={styles.element}>
                <div
                  style={{
                    backgroundImage: `url(${require(`../../../assets${item.thumbnail.regular.small}`)})`,
                  }}
                  className={styles.card}
                  key={item.title}
                >
                  <BookmarkButton
                    isBookmarked={item.isBookmarked}
                    index={item.id}
                  />

                  <div className={styles.overlay}>
                    <PlayButton
                      title={item.title}
                      img={item.thumbnail.regular.large}
                      year={item.year}
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
      </div>
    </>
  );
};

export default SearchElement;
