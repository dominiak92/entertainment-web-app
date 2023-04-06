import { useState, useEffect, useReducer } from "react";
import { dataContext } from "../pages/elements/dataContext";
import axios from "axios";

axios.defaults.baseURL = "https://entertainment-api.herokuapp.com";

const AxiosProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [updateValue, forceUpdate] = useReducer(x => x + 1, 0);
console.log(isLoading)
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
<dataContext.Provider value={{data, error, isLoading, forceUpdate}}>
    {children}
</dataContext.Provider>)
};

export default AxiosProvider;
