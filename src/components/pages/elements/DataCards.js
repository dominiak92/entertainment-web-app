import styles from "./DataCards.module.scss";
import movieIcon from "../assets/icon-category-movie.svg";
import tvseriesIcon from "../assets/icon-category-tv.svg";
import BookmarkButton from "../../UI/bookmarkButton";
import { useContext } from "react";
import { dataContext } from "./dataContext";
import Skeleton from "@mui/material/Skeleton";
import PlayButton from "../../UI/PlayButton";

const DataCards = (props) => {
  let bookmarkedCount = 0;
  

  const { data, error, isLoading } = useContext(dataContext);
  const skeleton = [0, 1, 2, 3, 4, 5];

  data &&
    data.forEach((item) => {
      if (item.isBookmarked === props.isBookmarked) {
        bookmarkedCount++; 
      }
    });

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{bookmarkedCount === 0 ? props.noData : props.title}</p>
      <div className={styles.cardWrapper}>
        {data &&
          data.map((item, index) =>
            props.type.includes(item.category) &&
            (props.isBookmarked ? item.isBookmarked : true) &&
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
                    index={item.id}
                  />

                  <div className={styles.overlay}>
                    <PlayButton
                      title={item.title}
                      img={item.thumbnail.regular.large}
                      year={item.year}
                      icon={item.category === "Movie" ? movieIcon : tvseriesIcon}
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
        {isLoading &&
          skeleton.map((item, index) => (
            <div key={index} className={styles.loading}>
              <Skeleton
                sx={{ bgcolor: "#161D2F" }}
                animation="wave"
                variant="rounded"
                width={'18vw'}
                height={'10vw'}
              />
              <Skeleton
                sx={{ bgcolor: "#161D2F" }}
                animation="wave"
                variant="text"
              />
              <Skeleton
                sx={{ bgcolor: "#161D2F" }}
                animation="wave"
                variant="text"
              />
            </div>
          ))}
        {error && (
          <div>
            <p>There is an error when fetching the data!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataCards;
