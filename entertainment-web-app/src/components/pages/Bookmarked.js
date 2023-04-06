import DataCards from "./elements/DataCards";
const Bookmarked = () => {
  return (
    <>
      <DataCards
        type={"Movie"}
        title={"Bookmarked Movies"}
        isBookmarked={true}
      />
      <DataCards
        type={"TV Series"}
        title={"Bookmarked TV Series"}
        isBookmarked={true}
      />
    </>
  );
};

export default Bookmarked;
