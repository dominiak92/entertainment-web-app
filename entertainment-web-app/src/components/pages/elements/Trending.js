import { Swiper, SwiperSlide } from "swiper/react";
import movieIcon from "../assets/icon-category-movie.svg";
import tvseriesIcon from "../assets/icon-category-tv.svg";
import playIcon from "../assets/icon-play.svg"
import styles from "./Trending.module.scss";
import "swiper/css";
import BookmarkButton from "../../UI/bookmarkButton";
import CircularProgress from "@mui/material/CircularProgress";

const Trending = (props) => {
  return (
    <>
      <p className={styles.title}>Trending</p>
      <div className={styles.wrapper}>
        <Swiper
          slidesPerView={"1.5"}
          centeredSlides={false}
          spaceBetween={16}
          className="mySwiper"
        >
          {props.data &&
            props.data.map((item, index) =>
              item.isTrending ? (
                <SwiperSlide key={item.title}>
                  
                    <div
                      style={{
                        backgroundImage: `url(${require(`../assets${item.thumbnail.trending.small}`)})`,
                      }}
                      className={styles.trendingCard}
                      key={item.title}
                    >
                      <BookmarkButton isBookmarked={item.isBookmarked} index={index} />
                      <div className={styles.description}>
                        <div className={styles.informations}>
                          <div className={styles.upperinfoWrapper}>
                            <p className={styles.year}>{item.year}</p>
                            <div className={styles.dot}></div>
                            <div className={styles.categoryWrapper}>
                              <img
                                className={styles.movieIcon}
                                src={`${
                                  item.category === "Movie"
                                    ? movieIcon
                                    : tvseriesIcon
                                }`}
                                alt="movie icon"
                              />
                              <p className={styles.category}>{item.category}</p>
                            </div>
                          </div>
                          <p className={styles.title}>{item.title}</p>
                        </div>
                        <div className={styles.rating}>
                          <p className={styles.ratingText}>{item.rating}</p>
                        </div>
                      </div>
                      <div className={styles.overlay}>
                    <img className={styles.playButton} src={playIcon} alt="play"/>
                  </div>
                    </div>
                    
                </SwiperSlide>
              ) : null
            )}
        </Swiper>
        {props.error && (
          <div>
            <p>There was an error fetching the data</p>
          </div>
        )}
        {/* {props.isLoading && (
          <div>
            <CircularProgress />
          </div>
        )} */}
        {/* <input type="text" onChange={(e) => props.setNewData(e.target.value)} />
      <button onClick={props.handlePostData}>Add new data</button> */}
      </div>
    </>
  );
};

export default Trending;
