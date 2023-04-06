import useAxios from "../hooks/AxiosProvider";
import Trending from "./elements/Trending";
import styles from "./Home.module.scss";
import DataCards from "./elements/DataCards";
import { useState, useContext } from "react";
import { dataContext } from "./elements/dataContext";

import "swiper/css";

const Home = () => {
  const [dataChanged, setDataChanged] = useState(false);

  const handleDataChange = () => {
    setDataChanged(true);
    console.log(dataChanged);
  };

  return (
    <div className={styles.wrapper}>
      <Trending />
      <DataCards
        type={["TV Series", "Movie"]}
        title={"Recommended"}
        isTrending={true}
        onDataChange={handleDataChange}
      />
    </div>
  );
};

export default Home;
