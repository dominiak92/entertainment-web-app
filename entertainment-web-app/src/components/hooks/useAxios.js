import { useState, useEffect, useCallback} from "react";
import axios from "axios";

const useFirebaseData = (firebaseUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [seed, setSeed] = useState(Math.random());


  const putData = useCallback(
    async (newBookmarked, index) => {
      setIsLoading(true);
      const reset = () => {
        setSeed(Math.random()); 
      }
      try {
          
        const newData = data.map((item, i) => {
          if (i === index) {
            reset();
            return {
              ...item,
              isBookmarked: newBookmarked,
            };
          }
          return item;
        });
  
        const response = await axios.put(firebaseUrl, newData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    },
    [data, firebaseUrl, seed]
  );

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(firebaseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [firebaseUrl, data]);  

  return { data, error, isLoading, putData, seed };
};

export default useFirebaseData;
