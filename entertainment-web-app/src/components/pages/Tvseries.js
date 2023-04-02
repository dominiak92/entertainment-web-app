import useFirebaseData from "../hooks/useAxios";
import DataCards from "./elements/DataCards";

import "swiper/css";

const Tvseries = () => {
  const firebaseUrl =
    "https://react-http-84e0c-default-rtdb.europe-west1.firebasedatabase.app/data.json";
  const { data, error, isLoading } = useFirebaseData(firebaseUrl);
  

  return (
    <DataCards error={error} data={data} isLoading={isLoading} type={['TV Series']} title={'TV Series'}/>
  );
};

export default Tvseries;
