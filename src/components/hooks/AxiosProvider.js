import { useState, useEffect, useReducer } from "react";
import { dataContext } from "../pages/elements/dataContext";
import axios from "axios";

axios.defaults.baseURL = "https://entertainment-api.herokuapp.com";

const AxiosProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [updateValue, forceUpdate] = useReducer(x => x + 1, 0);

  const countBookmarked = () => {
    if (!data) {
      return 0;
    }
    return data.reduce((count, item) => {
      if (item.isBookmarked) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);
  }

  const fetchData = () => {
    axios
      .get("/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [updateValue]);

return (
<dataContext.Provider value={{data, error, isLoading, forceUpdate, countBookmarked}}>
    {children}
</dataContext.Provider>)
};

export default AxiosProvider;
