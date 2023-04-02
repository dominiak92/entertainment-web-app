import React from "react";
import { useForm } from "react-hook-form";
import searchIco from "../../assets/icon-search.svg";
import styles from "./SearchBar.module.scss";
import useFirebaseData from "../hooks/useAxios";
import TextField from "@mui/material/TextField";

export default function App() {
  const firebaseUrl =
    "https://react-http-84e0c-default-rtdb.europe-west1.firebasedatabase.app/data.json";
  const { data, error, isLoading, putData } = useFirebaseData(firebaseUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className={styles["search-bar"]}
      onSubmit={handleSubmit(() => onSubmit(data))}
    >
      <button className={styles.searchButton} type="submit">
        <img src={searchIco} alt="search" />
      </button>
      <input
        className={styles.input}
        type="search"
        placeholder="Search TV Shows"
        {...register("Search TV Shows", {
          required: true,
          max: 30,
          min: 1,
          maxLength: 30,
          pattern: /^[a-zA-Z0-9_.-]*$/i,
        })}
      />
    </form>
  );
}
