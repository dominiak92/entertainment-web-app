import useFirebaseData from "../hooks/useAxios";
import Trending from "./elements/Trending";
import styles from "./Home.module.scss";
import DataCards from "./elements/DataCards";
import { useState } from "react";

import "swiper/css";

const Home = () => {
  const firebaseUrl =
    "https://react-http-84e0c-default-rtdb.europe-west1.firebasedatabase.app/data.json";
  const { data, error, isLoading } = useFirebaseData(firebaseUrl);
  const [dataChanged, setDataChanged] = useState(false);

  const handleDataChange = () => {
    setDataChanged(true);
    console.log(dataChanged)
  };

  return (
    <div className={styles.wrapper}>
      <Trending data={data} error={error} isLoading={isLoading} />
      <DataCards error={error} data={data} isLoading={isLoading} type={['TV Series', 'Movie']} title={'Recommended'} isTrending={true} onDataChange={handleDataChange}/>
    </div>
  );
};

export default Home;
