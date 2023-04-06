import { Swiper, SwiperSlide } from "swiper/react";
import movieIcon from "../assets/icon-category-movie.svg";
import tvseriesIcon from "../assets/icon-category-tv.svg";
import playIcon from "../assets/icon-play.svg"
import styles from "./Trending.module.scss";
import "swiper/css";
import BookmarkButton from "../../UI/bookmarkButton";
import CircularProgress from "@mui/material/CircularProgress";
import { dataContext } from "./dataContext";
import { useContext } from "react";

const Trending = () => {

    const {data, error, isLoading} = useContext(dataContext)
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
          {data &&
            data.map((item, index) =>
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
        {error && (
          <div>
            <p>There was an error fetching the data</p>
          </div>
        )}
        {isLoading && (
          <div>
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
};

export default Trending;
