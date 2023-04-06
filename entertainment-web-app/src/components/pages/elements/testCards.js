const testCards = () => {

return {

{isLoading ?  <div key={index} className={styles.element}>
<Skeleton variant="rectangular" width={300} height={400} />
</div> : <div
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
                </div> }


}

}

